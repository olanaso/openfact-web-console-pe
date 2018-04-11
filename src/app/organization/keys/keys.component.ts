import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contexts, Organization, OrganizationService } from './../../ngx-openfact';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/publish';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'of-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss']
})
export class KeysComponent implements OnInit, OnDestroy {

  company: Organization;
  useCustomCertificates: boolean;

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contexts: Contexts,
    private companyService: OrganizationService
  ) {
    this.subscriptions.push(
      contexts.current
        .map((val) => val.organization)
        .switchMap((company) => this.companyService.getOrganization(company.id))
        .do((company) => {
          this.company = company;
          this.useCustomCertificates = company.useCustomCertificates;
          this.routeToKeyConfigPage();
        })
        .publish().connect()
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

  routeToKeyConfigPage() {
    if (!this.useCustomCertificates) {
      this.router.navigate(['./_default'], { relativeTo: this.route });
    } else {
      this.router.navigate(['./_custom'], { relativeTo: this.route });
    }
  }

  changeCertificatesConfig(event: any) {
    const updatedCompany = this.createTransientCompany();
    updatedCompany.useCustomCertificates = event.currentValue;
    this.companyService.update(updatedCompany).subscribe((val) => {
      this.company = val;

      if (!val.useCustomCertificates) {
        this.router.navigate(['/_organization/' + this.company.id + '/_keys/_default']);
      } else {
        this.router.navigate(['/_organization/' + this.company.id + '/_keys/_custom']);
      }
    });
  }

  createTransientCompany(): Organization {
    const company = {
      id: this.company.id,
    } as Organization;

    return company;
  }

}
