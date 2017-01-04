import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'of-invoice-attatched-documents',
  templateUrl: './invoice-attatched-documents.component.html',
  styleUrls: ['./invoice-attatched-documents.component.scss']
})
export class InvoiceAttatchedDocumentsComponent implements OnInit {

  private invoice: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,) {
    this.invoice = this.activatedRoute.parent.snapshot.data['invoice'];
  }

  ngOnInit() {
  }

  viewAttatchedDocument(attatchedDocument) {
    if(attatchedDocument.documentType == "CREDIT_NOTE") {
      this.router.navigate(['../../../credit-notes', attatchedDocument.documentId], {relativeTo: this.activatedRoute});
    } else if(attatchedDocument.documentType == "DEBIT_NOTE") {
      this.router.navigate(['../../../debit-notes', attatchedDocument.documentId], {relativeTo: this.activatedRoute});
    } else if(attatchedDocument.documentType == "PERCEPTION") {
      this.router.navigate(['../../../perceptions', attatchedDocument.documentId], {relativeTo: this.activatedRoute});
    } else if(attatchedDocument.documentType == "RETENTIONS") {
      this.router.navigate(['../../../retentions', attatchedDocument.documentId], {relativeTo: this.activatedRoute});
    }
  }

}
