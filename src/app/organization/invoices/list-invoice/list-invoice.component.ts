import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Validators} from '@angular/common';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {OrganizationModel, InvoiceModel, LineModel, DataService} from '../../../services';
import {Alert, AlertMessageService} from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-list-invoice',
  templateUrl: 'list-invoice.component.html',
  styleUrls: ['list-invoice.component.css']
})
export class ListInvoiceComponent implements OnInit {

  private organization: OrganizationModel;
  invoices: Array<InvoiceModel>;

  alerts: Array<Alert> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertMessageService: AlertMessageService) {
    this.organization = this.activatedRoute.snapshot.parent.parent.data['organization'];
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
    this.dataService.invoices().getAll(this.organization).subscribe(
      result => {
        this.invoices = result;
      },
      error => {
        this.alerts.push({
          type: 'error',
          message: 'Error',
          details: 'Invoices could not be loaded.'
        });
      }
    );
  }
  editInvoice(invoice: InvoiceModel) {
    let link = ['/edit-invoice', invoice.id];
    console.log("Url actual: "+this.router.url);    
    this.router.navigate(link);
    //alert(JSON.stringify(invoice));
  }
}
