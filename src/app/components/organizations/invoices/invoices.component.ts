import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';
/**menu opénfact */
import { DefaultHeaderComponent } from '../../../shared/default-header';
import { NavbarUtilityMobileComponent } from '../../../shared/navbar-utility-mobile';
import { AlertsComponent } from '../../../shared/alerts';
import { ProjectHeaderComponent } from '../../../shared/project-header';
import { ProjectPageComponent } from '../../../shared/project-page';
/*services */
import { AlertMessageService } from '../../../services/alert-message.service';
//import { InvoiceService } from '../../../services/invoice.service';

import { OrganizationProviderService } from '../../../services/providers/organization-provider.service';
/**models */
import { InvoiceModel } from '../../../services/models/invoice-model';

import { OrganizationModel } from '../../../services/models/organization-model';

@Component({
  moduleId: module.id,
  selector: 'app-invoices',
  templateUrl: 'invoices.component.html',
  styleUrls: ['invoices.component.css'],
  directives: [ROUTER_DIRECTIVES, DefaultHeaderComponent, NavbarUtilityMobileComponent, AlertsComponent, ProjectHeaderComponent
    , ProjectPageComponent],
  providers: [/*InvoiceService, */AlertMessageService, OrganizationProviderService]
})
export class InvoicesComponent implements OnInit {

  invoices: Array<InvoiceModel>;
  //alerts: Array<AlertModel>;
  organizations: OrganizationModel;

  constructor(/*
    private router: Router,
    private alertMessageService: AlertMessageService,
    private organizationService: OrganizationProviderService*/
    /*private invoiceService: InvoiceService*/) {
    //this.invoices = [];
    //this.alerts = [];
  }

  ngOnInit() {
    /*this.alertMessageService.getAlerts().forEach(function (alert) {
      this.alerts[alert.name] = alert.data;
    });
    this.alertMessageService.clearAlerts();
    this.loadInvoices();
    
    this.organizationService.findById('master') 
    .subscribe(result => this.organizations = result, error => this.alertMessageService.addAlert(undefined));;*/
  }

  loadInvoices() {
    /*this.invoiceService.setPath("/organizations/master/invoices");
    console.log(this.invoiceService.getPath());
    this.invoiceService.getAll()
      .subscribe(result => this.invoices = result, error => this.alertMessageService.addAlert(undefined));*/
  }
}
