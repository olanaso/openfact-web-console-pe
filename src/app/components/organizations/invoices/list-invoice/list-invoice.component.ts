import { Component, OnInit } from '@angular/core';

import {InvoiceModel} from '../../../../services/models/invoice-model';
import {OrganizationModel} from '../../../../services/models/organization-model';
import {Router} from '@angular/router';

import {DataService} from '../../../../services/data.service';
import {Alert} from '../../../../services/alert';
import {AlertMessageService} from '../../../../services/alert-message.service';
import { OrganizationProviderService } from '../../../../services/providers/organization-provider.service';

import {AlertsComponent} from '../../../../shared/alerts';

@Component({
  moduleId: module.id,
  selector: 'app-list-invoice',
  templateUrl: 'list-invoice.component.html',
  styleUrls: ['list-invoice.component.css'],
  directives: [
    AlertsComponent
  ]
})
export class ListInvoiceComponent implements OnInit {
  invoices: Array<InvoiceModel>;
  alerts: Array<Alert>;
  organizations: OrganizationModel;
  constructor(
    private router: Router,
    private alertMessageService: AlertMessageService,
    private dataService: DataService,
    private organizationService: OrganizationProviderService
  ) {
    this.invoices = [];
    this.alerts = [];
    
  }

  ngOnInit() {
    this.loadAlerts();
    this.loadInvoices();
  }
  loadAlerts() {
    this.alertMessageService.getAlerts().forEach(alert => {
      this.alerts.push(alert);
    });
    this.alertMessageService.clearAlerts();
  }
  loadInvoices() {

    this.organizations=this.organizationService.build(),       
    console.log(this.organizations);
    // this.dataService.invoices().getAll().subscribe(
    //   result => {
    //     this.invoices = result;
    //   }, error => {
    //     this.alerts.push({
    //       type: 'error',
    //       message: 'Error loading projects ',
    //       details: 'Something happend when loading projects.',
    //       links: [{
    //         label: 'Retry',
    //         href: './'
    //       }]
    //     });
    //   });
  }

}
