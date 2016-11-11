import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Invoice } from '../../../shared';

@Component({
  selector: 'app-overview-invoice',
  templateUrl: './overview-invoice.component.html',
  styleUrls: ['./overview-invoice.component.scss']
})
export class OverviewInvoiceComponent implements OnInit {

  private invoice: Invoice;

  constructor(private activatedRoute: ActivatedRoute) {
    this.invoice = this.activatedRoute.snapshot.data['invoice'];
  }

  ngOnInit() {
  }

}
