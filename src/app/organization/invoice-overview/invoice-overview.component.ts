import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { Invoice } from '../../core/models/invoice.model';

@Component({
  selector: 'of-invoice-overview',
  templateUrl: './invoice-overview.component.html',
  styleUrls: ['./invoice-overview.component.scss']
})
export class InvoiceOverviewComponent implements OnInit {

  private invoice: Invoice;
  private invoiceJson: Invoice;
  private invoiceText: Invoice;

  constructor(private activatedRoute: ActivatedRoute,
    private dataService: DataService, private alertService: AlertService) {
    this.invoice = this.activatedRoute.snapshot.data['invoice'];
    this.invoiceJson = this.activatedRoute.snapshot.data['invoiceJson'];
    this.invoiceText = this.activatedRoute.snapshot.data['invoiceText'];
  }

  ngOnInit() {
  }

}
