import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

import { Invoice } from '../../core/models/invoice.model';

@Component({
  selector: 'of-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;

  private invoice: Invoice;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.invoice = data["invoice"];
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  downloadXml() {
    this.invoice.downloadXml();
  }

  downloadPdf() {
    this.invoice.downloadPdf();
  }

  sendToCustomer() {
    this.invoice.sendToCustomer().subscribe(result => {
      this.alertService.pop('success', 'Success', 'Success! Invoice sended to customer.');
    });
  }

  sendToThirdParty() {
    this.invoice.sendToThirdParty().subscribe(result => {
      this.alertService.pop('success', 'Success', 'Success! Invoice sended to third party.');
    });
  }

  attachCreditNote() {
    this.router.navigate(["../credit-notes", "create", { invoice: this.invoice.id }], { relativeTo: this.activatedRoute.parent });
  }

  attachDebitNote() {
    this.router.navigate(["../debit-notes", "create", { invoice: this.invoice.id }], { relativeTo: this.activatedRoute.parent });
  }

  maskAsVoided(invoice: any) {
    this.router.navigate(["../voideds", "create", { invoice: this.invoice.id }], { relativeTo: this.activatedRoute.parent });
  }

  viewAttatchedDocument(attatchedDocument) {
    if (attatchedDocument.documentType == "CREDIT_NOTE") {
      this.router.navigate(['../../credit-notes', attatchedDocument.documentId], { relativeTo: this.activatedRoute });
    } else if (attatchedDocument.documentType == "DEBIT_NOTE") {
      this.router.navigate(['../../debit-notes', attatchedDocument.documentId], { relativeTo: this.activatedRoute });
    } else if (attatchedDocument.documentType == "PERCEPTION") {
      this.router.navigate(['../../perceptions', attatchedDocument.documentId], { relativeTo: this.activatedRoute });
    } else if (attatchedDocument.documentType == "RETENTIONS") {
      this.router.navigate(['../../retentions', attatchedDocument.documentId], { relativeTo: this.activatedRoute });
    } else if (attatchedDocument.documentType == "VOIDED") {
      this.router.navigate(['../../voideds', attatchedDocument.documentId], { relativeTo: this.activatedRoute });
    }
  }

}
