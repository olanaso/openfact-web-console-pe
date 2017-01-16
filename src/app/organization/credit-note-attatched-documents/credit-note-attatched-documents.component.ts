import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-credit-note-attatched-documents',
  templateUrl: './credit-note-attatched-documents.component.html',
  styleUrls: ['./credit-note-attatched-documents.component.scss']
})
export class CreditNoteAttatchedDocumentsComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;

  private creditNote: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, ) {
  }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.creditNote = data["creditNote"];
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  viewAttatchedDocument(attatchedDocument) {
    if (attatchedDocument.documentType == "INVOICE") {
      this.router.navigate(['../../../invoices', attatchedDocument.documentId], { relativeTo: this.activatedRoute });
    } else if (attatchedDocument.documentType == "CREDIT_NOTE") {
      this.router.navigate(['../../../credit-notes', attatchedDocument.documentId], { relativeTo: this.activatedRoute });
    } else if (attatchedDocument.documentType == "DEBIT_NOTE") {
      this.router.navigate(['../../../debit-notes', attatchedDocument.documentId], { relativeTo: this.activatedRoute });
    } else if (attatchedDocument.documentType == "PERCEPTION") {
      this.router.navigate(['../../../perceptions', attatchedDocument.documentId], { relativeTo: this.activatedRoute });
    } else if (attatchedDocument.documentType == "RETENTIONS") {
      this.router.navigate(['../../../retentions', attatchedDocument.documentId], { relativeTo: this.activatedRoute });
    } else if (attatchedDocument.documentType == "VOIDED") {
      this.router.navigate(['../../../voideds', attatchedDocument.documentId], { relativeTo: this.activatedRoute });
    }
  }

}
