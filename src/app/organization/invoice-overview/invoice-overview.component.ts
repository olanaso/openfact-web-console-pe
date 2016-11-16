import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Invoice } from '../../core/models/invoice.model';

@Component({
  selector: 'of-invoice-overview',
  templateUrl: './invoice-overview.component.html',
  styleUrls: ['./invoice-overview.component.scss']
})
export class InvoiceOverviewComponent implements OnInit {

   private invoice: Invoice;

  constructor(private activatedRoute: ActivatedRoute) {
    this.invoice = this.activatedRoute.parent.snapshot.data['invoice'];
  }

  ngOnInit() {
  }

}
