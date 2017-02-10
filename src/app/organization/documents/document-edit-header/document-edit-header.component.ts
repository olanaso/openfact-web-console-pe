import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { AlertService } from './../../../core/alert/alert.service';
import { DataService } from './../../../core/data/data.service';
import { DialogService } from './../../../core/dialog/dialog.service';
import { Document } from './../../../core/model/document.model';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Organization } from './../../../core/model/organization.model';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'of-document-edit-header',
  templateUrl: './document-edit-header.component.html',
  styles: []
})
export class DocumentEditHeaderComponent implements OnInit {

  @Input()
  organization: Organization;

  @Input()
  document: Document;

  @Input()
  breadcrumb: string;

  @Input()
  documentType: string;

  @Input()
  enableDelete: boolean = true;

  @Input()
  enableDownloadXml: boolean = true;

  @Input()
  enableDownloadCdr: boolean = true;

  @Input()
  enableDownloadPdf: boolean = true;

  @Input()
  enableAssignCreditNote: boolean = true;

  @Input()
  enableAssignDebitNote: boolean = true;

  @Input()
  enableSendToCustomer: boolean = true;

  @Input()
  enableSendToThirdParty: boolean = true;

  @Input()
  enableSendToCustomThirdParty: boolean = true;

  @Input()
  enableVoid: boolean = true;

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

  ngOnInit() { }

  downloadXml() {
    this.document.downloadXml();
  }

  downloadCdr() {
    this.dataService.organizationsSunat().downloadDocumentCdr(this.organization.organization, this.document.id);
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
    this.modalService.open(content).result.then(
      (form: NgForm) => {
        if (form.valid) {
          this.document.sendToThirdPartyByEmail({ email: form.value.thirdPartyByEmail.email }).subscribe(data => {
            this.alertService.pop('success', 'Success', 'Success! Document sended to third party.');
          });
        }
      },
      (reason) => { });
  }

  attachCreditNote() {
    this.router.navigate(['../../credit-notes', 'create', { invoice: this.document.documentId }], { relativeTo: this.route });
  }

  attachDebitNote() {
    this.router.navigate(['../../debit-notes', 'create', { invoice: this.document.documentId }], { relativeTo: this.route });
  }

  maskAsVoided() {
    this.router.navigate(['../../voided-documents', 'create', { document: this.document.documentId, type: this.document.documentType }], { relativeTo: this.route });
  }

  delete() {
    this.dialog.confirmDelete(this.document.documentId, 'Document').result.then(
      (result) => {
        this.document.delete().subscribe((data) => {
          this.alertService.pop('success', 'Success', 'Success! Document deleted successfully.');
          this.router.navigate(['../'], { relativeTo: this.route });
        });
      },
      (cancel) => { }
    );
  }

}
