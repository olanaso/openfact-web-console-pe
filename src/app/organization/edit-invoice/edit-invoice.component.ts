import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { Invoice } from '../../core/models/invoice.model';

import { DialogService } from '../../shared/components/dialog/dialog.service';

@Component({
  selector: 'of-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;
  private organization: Organization;
  private invoice: Invoice;

  private thirdPartyByEmail: any = {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private dataService: DataService,
    private alertService: AlertService,
    private dialog: DialogService) {
  }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.organization = data["organization"];
      this.invoice = data["invoice"];
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  reloadInvoice() {
    this.invoice.reload().subscribe(data => {
      this.invoice = data;
    });
  }

  downloadXml() {
    this.invoice.downloadXml();
  }

  downloadCdr() {
    this.dataService.organizationPeru().downloadInvoiceCdr(this.organization.organization, this.invoice.id);
  }

  downloadPdf() {
    let queryParams: URLSearchParams = new URLSearchParams();
    queryParams.set("format", "pdf");
    this.invoice.downloadReport(queryParams);
  }

  sendToCustomer() {
    this.invoice.sendToCustomer().subscribe(data => {
      this.alertService.pop('success', 'Success', 'Success! Invoice sended to customer.');
    });
  }

  sendToThirdParty() {
    this.invoice.sendToThirdParty().subscribe(data => {
      this.alertService.pop('success', 'Success', 'Success! Invoice sended to third party.');
    });
  }

  sendToCustomThridPartyByEmail(content: any) {
    this.modalService.open(content).result.then((form: NgForm) => {
      if (form.valid) {
        this.invoice.sendToThirdPartyByEmail({ email: form.value.thirdPartyByEmail.email }).subscribe(data => {
          this.alertService.pop('success', 'Success', 'Success! Invoice sended to third party.');
        })
      }
    }, (reason) => {
    });
  }

  attachCreditNote() {
    this.router.navigate(["../credit-notes", "create", { invoice: this.invoice.documentId }], { relativeTo: this.activatedRoute.parent });
  }

  attachDebitNote() {
    this.router.navigate(["../debit-notes", "create", { invoice: this.invoice.documentId }], { relativeTo: this.activatedRoute.parent });
  }

  maskAsVoided() {
    this.router.navigate(["../voideds", "create", { invoice: this.invoice.documentId }], { relativeTo: this.activatedRoute.parent });
  }

  delete() {
    this.dialog.confirmDelete(this.invoice.documentId, "Invoice").result.then((result) => {
      this.invoice.delete().subscribe((data) => {
        this.alertService.pop('success', 'Success', 'Success! Invoice deleted successfully.');
        this.router.navigate(["../invoices"], { relativeTo: this.activatedRoute.parent });
      })
    });
  }

  viewAttatchedDocument(attatchedDocument) {
    if (attatchedDocument.documentType == "INVOICE") {
      this.router.navigate(['../../invoices', attatchedDocument.documentId], { relativeTo: this.activatedRoute });
    } else if (attatchedDocument.documentType == "CREDIT_NOTE") {
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
