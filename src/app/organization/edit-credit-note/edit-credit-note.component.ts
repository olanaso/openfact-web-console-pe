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
import { CreditNote } from '../../core/models/credit-note.model';

@Component({
  selector: 'of-edit-credit-note',
  templateUrl: './edit-credit-note.component.html',
  styleUrls: ['./edit-credit-note.component.scss']
})
export class EditCreditNoteComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;
  private organization: Organization;
  private creditNote: CreditNote;

  private thirdPartyByEmail: any = {};

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private dataService: DataService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.organization = data["organization"];
      this.creditNote = data["creditNote"];
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  reloadCreditNote() {
    this.creditNote.reload().subscribe(data => {
      this.creditNote = data;
    });
  }

  downloadXml() {
    this.creditNote.downloadXml();
  }

  downloadCdr() {
    this.dataService.organizationPeru().downloadCreditNoteCdr(this.organization.organization, this.creditNote.id);
  }

  downloadPdf() {
    let queryParams: URLSearchParams = new URLSearchParams();
    queryParams.set("format", "pdf");
    this.creditNote.downloadReport(queryParams);
  }

  sendToCustomer() {
    this.creditNote.sendToCustomer().subscribe(data => {
      this.alertService.pop('success', 'Success', 'Success! Credit Note sended to customer.');
    });
  }

  sendToThirdParty() {
    this.creditNote.sendToThirdParty().subscribe(data => {
      this.alertService.pop('success', 'Success', 'Success! Credit Note sended to third party.');
    });
  }

  sendToCustomThridPartyByEmail(content: any) {
    this.modalService.open(content).result.then((form: NgForm) => {
      if (form.valid) {
        this.creditNote.sendToThirdPartyByEmail({ email: form.value.thirdPartyByEmail.email }).subscribe(data => {
          this.alertService.pop('success', 'Success', 'Success! Credit Note sended to third party.');
        })
      }
    }, (reason) => {
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
