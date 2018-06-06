import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { URLSearchParams } from '@angular/http';
import { Organization } from '../../../../../core/model/organization.model';
import { DataService } from '../../../../../core/data/data.service';
import { Document } from '../../../../../core/model/document.model';
import { ToastsManager } from 'ng2-toastr';
import { DialogService } from '../../../../../core/dialog/dialog.service';

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
    private toastr: ToastsManager,
    private dialog: DialogService) {
  }

  ngOnInit() {
  }

  /**
   * Actions
   */
  downloadXml() {
    this.document.getXml().subscribe(result => {
      this.dialog.xmlpreview(result.fileName, result.file).result.then((data) => {
        if (data === 'download') {
          this.document.downloadXml();
        }
      });
    }, error => {
      this.toastr.error('Error! Document download fail.');
    });
  }

  downloadCdr() {
    this.dataService.organizationsSunat().downloadDocumentCdr(this.organization.organization, this.document.id);
  }

  downloadPdf() {
    const queryParams: URLSearchParams = new URLSearchParams();
    queryParams.set('format', 'pdf');
    this.document.getPdf(queryParams).subscribe(result => {
      let file = new Uint8Array(result.file);
      this.dialog.preview(result.fileName, file).result.then((data) => {
        if (data === 'download') {
          this.document.downloadReport(queryParams);
        }
      });
    }, error => {
      this.toastr.error('Error! Document download fail.');
    });

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
