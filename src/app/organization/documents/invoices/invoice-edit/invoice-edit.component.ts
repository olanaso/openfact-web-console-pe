import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { AlertService } from './../../../../core/alert/alert.service';
import { DataService } from './../../../../core/data/data.service';
import { DialogService } from './../../../../core/dialog/dialog.service';
import { Document } from './../../../../core/model/document.model';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Organization } from './../../../../core/model/organization.model';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'of-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: []
})
export class InvoiceEditComponent implements OnInit, OnDestroy {

  dataSubscription: Subscription;
  parentDataSubscription: Subscription;

  organization: Organization;
  document: Document;

  thirdPartyByEmail: any = {};
  isAttatchedDocumentsCollapsed: boolean;
  isAttributesCollapsed: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private dataService: DataService,
    private alertService: AlertService,
    private dialog: DialogService) {
  }

  ngOnInit() {
    this.parentDataSubscription = this.route.parent.data.subscribe(data => {
      this.organization = data['organization'];
    });
    this.dataSubscription = this.route.data.subscribe(data => {
      this.document = data['document'];
    });
  }

  ngOnDestroy() {
    this.parentDataSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }

  reloadDocument() {
    this.document.reload().subscribe(data => {
      this.document = data;
    });
  }

  downloadXml() {
    this.document.downloadXml();
  }

  downloadCdr() {
    // this.dataService.organizationPeru().downloadDocumentCdr(this.organization.organization, this.document.id);
  }

  downloadPdf() {
    const queryParams: URLSearchParams = new URLSearchParams();
    queryParams.set('format', 'pdf');
    this.document.downloadReport(queryParams);
  }

  sendToCustomer() {
    this.document.sendToCustomer().subscribe(data => {
      this.alertService.pop('success', 'Success', 'Success! Document sended to customer.');
    });
  }

  sendToThirdParty() {
    this.document.sendToThirdParty().subscribe(data => {
      this.alertService.pop('success', 'Success', 'Success! Document sended to third party.');
    });
  }

  sendToCustomThridPartyByEmail(content: any) {
    this.modalService.open(content).result.then((form: NgForm) => {
      if (form.valid) {
        this.document.sendToThirdPartyByEmail({ email: form.value.thirdPartyByEmail.email }).subscribe(data => {
          this.alertService.pop('success', 'Success', 'Success! Document sended to third party.');
        });
      }
    }, (reason) => {
    });
  }

  attachCreditNote() {
    this.router.navigate(['../credit-notes', 'create', { Document: this.document.documentId }], { relativeTo: this.route.parent });
  }

  attachDebitNote() {
    this.router.navigate(['../debit-notes', 'create', { Document: this.document.documentId }], { relativeTo: this.route.parent });
  }

  maskAsVoided() {
    this.router.navigate(['../voideds', 'create', { Document: this.document.documentId }], { relativeTo: this.route.parent });
  }

  delete() {
    this.dialog.confirmDelete(this.document.documentId, 'Document').result.then((result) => {
      this.document.delete().subscribe((data) => {
        this.alertService.pop('success', 'Success', 'Success! Document deleted successfully.');
        this.router.navigate(['../'], { relativeTo: this.route });
      });
    });
  }

  viewAttatchedDocument(attatchedDocument) {
    if (attatchedDocument.documentType === 'INVOICE') {
      this.router.navigate(['../../invoices', attatchedDocument.documentId], { relativeTo: this.route });
    } else if (attatchedDocument.documentType === 'CREDIT_NOTE') {
      this.router.navigate(['../../credit-notes', attatchedDocument.documentId], { relativeTo: this.route });
    } else if (attatchedDocument.documentType === 'DEBIT_NOTE') {
      this.router.navigate(['../../debit-notes', attatchedDocument.documentId], { relativeTo: this.route });
    } else if (attatchedDocument.documentType === 'PERCEPTION') {
      this.router.navigate(['../../perceptions', attatchedDocument.documentId], { relativeTo: this.route });
    } else if (attatchedDocument.documentType === 'RETENTIONS') {
      this.router.navigate(['../../retentions', attatchedDocument.documentId], { relativeTo: this.route });
    } else if (attatchedDocument.documentType === 'VOIDED') {
      this.router.navigate(['../../voideds', attatchedDocument.documentId], { relativeTo: this.route });
    }
  }

}
