import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { Invoice } from '../../core/models/invoice.model';

@Component({
  selector: 'of-invoice-send-events',
  templateUrl: './invoice-send-events.component.html',
  styleUrls: ['./invoice-send-events.component.scss']
})
export class InvoiceSendEventsComponent implements OnInit {

  private organization: any;
  private invoice: any;

  events: Array<any>;

  constructor(private activatedRoute: ActivatedRoute,
    private dataService: DataService, private alertService: AlertService) {
    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.invoice = this.activatedRoute.snapshot.data['invoice'];
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    let invoice: Invoice = this.dataService.invoices().build(this.organization, this.invoice.id);
    this.dataService.invoices().getSendEvents(invoice).subscribe(
      result => {
        this.events = result;
      },
      error => {
        this.alertService.pop('error', 'Error', 'Organization could not be created.');
      }
    );;
  }

  downloadFile(file) {

  }

}
