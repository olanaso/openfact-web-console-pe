import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Invoice } from '../../core/models/invoice.model';

@Component({
  selector: 'of-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent implements OnInit {

  private invoice: Invoice;

  constructor(private activatedRoute: ActivatedRoute) {
    this.invoice = this.activatedRoute.snapshot.data['invoice'];
  }

  ngOnInit() {
  }

  downloadXml() {
    this.invoice.downloadXml();
  }

}
