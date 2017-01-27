import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Document } from './../../core/model/document.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'of-document-attached-documents',
  templateUrl: './document-attached-documents.component.html',
  styleUrls: []
})
export class DocumentAttachedDocumentsComponent implements OnInit, OnDestroy {

  dataSubscription: Subscription;

  document: Document;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.dataSubscription = this.route.parent.data.subscribe(data => {
      this.document = data['document'];
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  viewAttatchedDocument(attatchedDocument) {
    if (attatchedDocument.documentType == 'INVOICE') {
      this.router.navigate(['../../../invoices', attatchedDocument.documentId], { relativeTo: this.route });
    } else if (attatchedDocument.documentType == 'CREDIT_NOTE') {
      this.router.navigate(['../../../credit-notes', attatchedDocument.documentId], { relativeTo: this.route });
    } else if (attatchedDocument.documentType == 'DEBIT_NOTE') {
      this.router.navigate(['../../../debit-notes', attatchedDocument.documentId], { relativeTo: this.route });
    } else if (attatchedDocument.documentType == 'PERCEPTION') {
      this.router.navigate(['../../../perceptions', attatchedDocument.documentId], { relativeTo: this.route });
    } else if (attatchedDocument.documentType == 'RETENTIONS') {
      this.router.navigate(['../../../retentions', attatchedDocument.documentId], { relativeTo: this.route });
    } else if (attatchedDocument.documentType == 'VOIDED') {
      this.router.navigate(['../../../voideds', attatchedDocument.documentId], { relativeTo: this.route });
    }
  }

}
