import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

import { Invoice } from '../../core/models/invoice.model';

@Component({
  selector: 'of-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent implements OnInit {

  private invoice: Invoice;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.invoice = this.activatedRoute.snapshot.data['invoice'];
  }

  ngOnInit() {
  }

  downloadXml() {
    this.invoice.downloadXml();
  }

  downloadPdf() {
    this.invoice.downloadPdf();
  }

  sendToCustomer() {
    this.invoice.sendToCustomer().subscribe(
      result => {
        this.alertService.pop('success', 'Success', 'Success! Invoice sended to customer.');
      },
      error => {
        this.alertService.pop('error', 'Error', 'Organization could not be created.');
      }
    );
  }

  sendToThirdParty() {
    this.invoice.sendToThirdParty().subscribe(
      result => {
        this.alertService.pop('success', 'Success', 'Success! Invoice sended to third party.');
      },
      error => {
        this.alertService.pop('error', 'Error', 'Organization could not be created.');
      }
    );
  }

}
