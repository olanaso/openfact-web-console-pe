import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';
/**menu opénfact */
import { DefaultHeaderComponent } from '../../../directives/default-header';
import { NavbarUtilityMobileComponent } from '../../../directives/navbar-utility-mobile';
import { AlertsComponent } from '../../../directives/alerts';
import { ProjectHeaderComponent } from '../../../directives/project-header';
import { ProjectPageComponent } from '../../../directives/project-page';
/*services */
import { AlertMessageService } from '../../../services/util/alert-message.service';
import { InvoiceService } from '../../../services/invoice.service';
import { AuthService } from '../../../services/auth/auth.service';
import { OrganizationService } from '../../../services/organization.service';
/**models */
import { InvoiceModel } from '../../../models/invoice-model';
import { AlertModel } from '../../../models/alert-model';
import { OrganizationModel } from '../../../models/organization-model';

@Component({
  moduleId: module.id,
  selector: 'app-invoices',
  templateUrl: 'invoices.component.html',
  styleUrls: ['invoices.component.css'],
  directives: [ROUTER_DIRECTIVES, DefaultHeaderComponent, NavbarUtilityMobileComponent, AlertsComponent, ProjectHeaderComponent
    , ProjectPageComponent],
  providers: [InvoiceService, AuthService, AlertMessageService, OrganizationService],
})
export class InvoicesComponent implements OnInit {

  invoices: Array<InvoiceModel>;
  alerts: Array<AlertModel>;
  organizations: OrganizationModel;

  constructor(
    private router: Router,
    private alertMessageService: AlertMessageService,
    private authService: AuthService,
    private organizationService: OrganizationService,
    private invoiceService: InvoiceService) {
    this.invoices = [];
    this.alerts = [];
  }

  ngOnInit() {
    this.alertMessageService.getAlerts().forEach(function (alert) {
      this.alerts[alert.name] = alert.data;
    });
    this.alertMessageService.clearAlerts();
    this.loadInvoices();
    
    this.organizationService.findById('master') 
    .subscribe(result => this.organizations = result, error => this.alertMessageService.addAlert(undefined));;
  }

  loadInvoices() {
    this.invoiceService.setPath("/organizations/master/invoices");
    console.log(this.invoiceService.getPath());
    this.invoiceService.getAll()
      .subscribe(result => this.invoices = result, error => this.alertMessageService.addAlert(undefined));
  }
}
