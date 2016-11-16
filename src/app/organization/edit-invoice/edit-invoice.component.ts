import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Invoice } from '../../services/models/invoice';

@Component({
  selector: 'app-edit-invoice',
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

}
