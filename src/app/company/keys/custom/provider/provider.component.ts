import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServerInfoService ,Company, CompanyService, Contexts } from './../../../../ngx-openfact';
import { Notification, NotificationType, Notifications } from './../../../../ngx-base';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/concat';

@Component({
  selector: 'of-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit, OnDestroy {

  company: Company;
  loading = false;
  create: boolean;

  working = false;

  instance: any;

  providerId: string;
  serverInfo: any;
  providerFactory: any;

  form: FormGroup;

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private contexts: Contexts,
    private formBuilder: FormBuilder,
    private serverInfoService: ServerInfoService,
    private notifications: Notifications,
  ) {
    this.form = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.maxLength(60)])],
      parentId: [null, Validators.maxLength(250)],
      providerId: [null, Validators.maxLength(250)],
      providerType: [null, Validators.maxLength(250)]
    });

    this.subscriptions.push(
      Observable.concat(
        contexts.current
          .map((val) => val.company)
          .do((company) => {
            this.loading = true;
            this.company = company;
          })
          .switchMap((company) => serverInfoService.getServerInfo())
          .do((serverInfo) => {
            this.serverInfo = serverInfo;
          })
          .switchMap(() => route.params)
          .do((params) => {
            this.providerId = params['provider'];
          })
          .first()
        ,
        route.params
          .map(params => params['component'])
          .filter(component => component !== null && component !== undefined)
          .switchMap((component) => {
            return companyService.getComponentById(this.company.id, component);
          })
          .do((component) => this.instance = component)
      ).subscribe(() => {
        this.refreshValues();
        this.loadData();
      })
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

  refreshValues() {
    if (!this.instance) {
      this.instance = {};
    }

    this.create = !this.instance.providerId;

    const providers = this.serverInfo.componentTypes['org.openfact.keys.KeyProvider'];
    let providerFactory = null;
    for (let i = 0; i < providers.length; i++) {
      const p = providers[i];
      if (p.id === this.providerId) {
        this.providerFactory = p;
        providerFactory = p;
        break;
      }
    }

    if (this.create) {
      this.instance = {
        name: providerFactory.id,
        providerId: providerFactory.id,
        providerType: 'org.openfact.keys.KeyProvider',
        parentId: this.company.id,
        config: {
          'priority': ['0']
        }
      };
    }

    if (providerFactory.properties) {
      for (let i = 0; i < providerFactory.properties.length; i++) {
        const configProperty = providerFactory.properties[i];
        if (!this.instance.config[configProperty.name]) {
          if (configProperty.defaultValue) {
            this.instance.config[configProperty.name] = [configProperty.defaultValue];
            if (!this.create) {
              this.instance.config[configProperty.name] = [configProperty.defaultValue];
            }
          } else {
            this.instance.config[configProperty.name] = [''];
            if (!this.create) {
              this.instance.config[configProperty.name] = [configProperty.defaultValue];
            }
          }
        }
      }
    }
  }

  loadData() {
    this.form.patchValue({
      name: this.instance.name,
      parentId: this.instance.parentId,
      providerId: this.instance.providerId,
      providerType: this.instance.providerType
    });
  }

  save(form, config) {
    this.working = true;

    if (this.create) {
      this.companyService.createComponent(this.company.id, Object.assign(form, { config: config })).subscribe(
        (result) => {
          this.working = false;
          this.notifications.message({
            message: `El componente fue creado!`,
            type: NotificationType.SUCCESS
          } as Notification);
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        (error) => {
          this.working = false;
          this.notifications.message({
            message: `Hubo un error al crear el componente!`,
            type: NotificationType.DANGER
          } as Notification);
        }
      );
    } else {
      this.companyService.updateComponent(this.company.id, this.instance.id, Object.assign(form, { config: config })).subscribe(
        (data) => {
          this.working = false;
          this.notifications.message({
            message: `El componente fue actualizado!`,
            type: NotificationType.SUCCESS
          } as Notification);
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        (error) => {
          this.working = false;
          this.notifications.message({
            message: `Hubo un error al actualizar el componente!`,
            type: NotificationType.SUCCESS
          } as Notification);
        }
      );
    }
  };

  cancel() {
    if (this.create) {
      this.router.navigate(['../_providers'], { relativeTo: this.route });
    } else {
      this.router.navigate(['../../_providers'], { relativeTo: this.route });
    }
  };

}
