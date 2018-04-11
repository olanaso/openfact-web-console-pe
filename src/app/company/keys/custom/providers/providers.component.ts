import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

import { Organization, OrganizationService, ServerInfoService, Contexts } from './../../../../ngx-openfact';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'of-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit, OnDestroy {

  company: Organization;
  loading = false;

  type = 'org.openfact.keys.KeyProvider';

  providers: any;
  instances: any;

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private companyService: OrganizationService,
    private serverInfoService: ServerInfoService,
    private contexts: Contexts
  ) {
    this.subscriptions.push(
      contexts.current
        .map((val) => val.company)
        .do((company) => {
          this.loading = true;
          this.company = company;
        })
        .switchMap((company) => {
          let params: HttpParams = new HttpParams();
          params = params.set('type', this.type);
          params = params.set('parent', this.company.id);

          return this.companyService.getComponents(this.company.id);
        })
        .do((components) => {
          this.instances = components;
        })
        .do(() => {
          this.loading = false;
        })
        .publish().connect()
    );

    this.subscriptions.push(
      serverInfoService.getServerInfo().subscribe((val) => {
        this.providers = val.componentTypes['org.openfact.keys.KeyProvider'];
      })
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

  addProvider(provider) {
    this.router.navigate(['./', provider], { relativeTo: this.route });
  }

  editInstance(instance) {
    this.router.navigate(['./', instance.providerId, instance.id], { relativeTo: this.route });
  }

  removeInstance(instance) {
    // this.dialogService.confirmDelete(instance.name, 'Component').result.then(
    //   (result) => {
    //     this.organization.removeComponent(instance.id).subscribe(
    //       (data) => {
    //         this.toastr.success('The provider has been deleted.');
    //         this.loadComponents();
    //       }
    //     );
    //   }
    // );
  }

}

