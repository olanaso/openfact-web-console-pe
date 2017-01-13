import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

import { findParam } from '../../core/resolvers/find-param';

@Component({
  selector: 'of-organization-generic-keystore',
  templateUrl: './organization-generic-keystore.component.html',
  styleUrls: ['./organization-generic-keystore.component.scss']
})
export class OrganizationGenericKeystoreComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;

  private organization: any;
  private serverinfo: any;

  private form: FormGroup;
  private create: boolean;
  private working: boolean = false;

  private providerFactory: any;
  private instance: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.buildForm();
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.organization = data["organization"];
      this.serverinfo = data["serverinfo"];
      this.instance = data["instance"] || {};
      this.refreshValues();
      this.loadData();      
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.maxLength(60)])],
      parentId: [null, Validators.maxLength(250)],
      providerId: [null, Validators.maxLength(250)],
      providerType: [null, Validators.maxLength(250)]
    });
  }

  loadData() {
    this.form.patchValue({
      name: this.instance.name,
      parentId: this.instance.parentId,
      providerId: this.instance.providerId,
      providerType: this.instance.providerType
    });
  }

  refreshValues() {
    this.create = !this.instance.providerId;

    let providerId = findParam('provider', this.activatedRoute.snapshot);

    let providers = this.serverinfo.componentTypes['org.openfact.keys.KeyProvider'];
    let providerFactory = null;
    for (let i = 0; i < providers.length; i++) {
      let p = providers[i];
      if (p.id == providerId) {
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
        parentId: this.organization.id,
        config: {
          'priority': ["0"]
        }
      }
    }

    if (providerFactory.properties) {
      for (let i = 0; i < providerFactory.properties.length; i++) {
        let configProperty = providerFactory.properties[i];
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

  save(form, config) {
    this.working = true;

    if (this.create) {
      this.dataService.organizations().createComponent(this.organization, Object.assign(form, { config: config })).subscribe(
        result => {
          this.alertService.pop('success', 'Success', 'Success! The organization has been created.');
          this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
        },
        error => {
          this.working = false;
        }
      );
    } else {
      this.dataService.organizations().updateComponent(this.organization, this.instance.id, Object.assign(form, { config: config })).subscribe(
        result => {
          this.alertService.pop('success', 'Success', 'Success! The provider has been updated.');
          this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
        },
        error => {
          this.working = false;
        }
      );
    }
  };

  reset() {
  };

  cancel() {
    this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
  };

}
