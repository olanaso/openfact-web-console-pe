import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { URLSearchParams } from '@angular/http';
import { Organization } from '../../../../../core/model/organization.model';
import { DataService } from '../../../../../core/data/data.service';
import { AlertService } from '../../../../../core/alert/alert.service';
import { Document } from '../../../../../core/model/document.model';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'of-document-actions',
  templateUrl: './document-actions.component.html',
  styles: [``]
})
export class DocumentActionsComponent implements OnInit {

  @Input()
  organization: Organization;

  @Input()
  document: Document;

  @Input()
  enableDownloadXml = true;

  @Input()
  enableDownloadCdr = true;

  @Input()
  enableDownloadPdf = true;

  @Input()
  enableAssignCreditNote = true;

  @Input()
  enableAssignDebitNote = true;

  @Input()
  enableSendToCustomer = true;

  @Input()
  enableSendToThirdParty = true;

  @Input()
  enableSendToCustomThirdParty = true;

  @Input()
  enableVoid = true;

  thirdPartyByEmail: any = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private dataService: DataService,
              private toastr: ToastsManager) {
  }

  ngOnInit() {
  }

  /**
   * Actions
   */
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
    this.document.sendToCustomer().subscribe(result => {
      this.toastr.success('Success! Document sended to customer.');
    });
  }

  sendToThirdParty() {
    this.document.sendToThirdParty().subscribe(result => {
      this.toastr.success('Success! Document sended to third party.');
    });
  }

  sendToCustomThridPartyByEmail(content: any) {
    this.modalService.open(content).result.then(
      (form: NgForm) => {
        if (form.valid) {
          this.document.sendToThirdPartyByEmail({ email: form.value.thirdPartyByEmail.email }).subscribe(data => {
            this.toastr.success('Success! Document sended to third party.');
          });
        }
      }, (reason) => {
      });
  }

  attachCreditNote() {
    this.router.navigate(['../credit-notes', 'create', { invoice: this.document.documentId }], { relativeTo: this.route.parent });
  }

  attachDebitNote() {
    this.router.navigate(['../debit-notes', 'create', { invoice: this.document.documentId }], { relativeTo: this.route.parent });
  }

  markAsVoided() {
    this.router.navigate(
      ['../voided-documents', 'create', { document: this.document.documentId, type: this.document.documentType }],
      { relativeTo: this.route.parent }
    );
  }

}
