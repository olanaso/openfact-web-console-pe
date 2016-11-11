import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Invoice } from '../../../../shared';

@Component({
  selector: 'app-summary-invoice',
  templateUrl: './summary-invoice.component.html',
  styleUrls: ['./summary-invoice.component.scss']
})
export class SummaryInvoiceComponent implements OnInit {

  private invoice: Invoice;

  constructor(private activatedRoute: ActivatedRoute) {
    this.invoice = this.activatedRoute.parent.snapshot.data['invoice'];
  }

  ngOnInit() {
  }

}
