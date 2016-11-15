import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Invoice } from '../../services/models/invoice';

@Component({
  selector: 'app-invoice-overview-summary',
  templateUrl: './invoice-overview-summary.component.html',
  styleUrls: ['./invoice-overview-summary.component.scss']
})
export class InvoiceOverviewSummaryComponent implements OnInit {

  private invoice: Invoice;

  constructor(private activatedRoute: ActivatedRoute) {
    this.invoice = this.activatedRoute.snapshot.data['invoice'];
  }

  ngOnInit() {
  }

}
