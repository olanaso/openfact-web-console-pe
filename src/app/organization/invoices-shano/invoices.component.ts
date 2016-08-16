import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';

/*services */
import { OrganizationModel, InvoiceModel, OrganizationProviderService } from '../../services';
import { AlertMessageService } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-invoices',
  templateUrl: 'invoices.component.html',
  styleUrls: ['invoices.component.css']
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
   // alert("sasasa");
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
