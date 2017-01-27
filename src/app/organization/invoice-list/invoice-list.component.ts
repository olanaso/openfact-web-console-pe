import * as Collections from 'typescript-collections';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AlertService } from './../../core/alert/alert.service';
import { DataService } from './../../core/data/data.service';
import { Document } from './../../core/model/document.model';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderBy } from './../../core/model/order-by.model';
import { Organization } from './../../core/model/organization.model';
import { Paging } from './../../core/model/paging.model';
import { SearchCriteria } from './../../core/model/search-criteria.model';
import { SearchResults } from './../../core/model/search-results.model';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'of-invoice-list',
  templateUrl: './invoice-list.component.html',
  styles: []
})
export class InvoiceListComponent implements OnInit {

  dataSubscription: Subscription;

  organization: Organization;
  searchResult: SearchResults<Document> = new SearchResults<Document>();

  thirdPartyByEmail: any = {};

  filters = {
    filterText: undefined,
    typeCode: undefined,
    selected: new Collections.Dictionary<String, any>()
  };
  orderBy: OrderBy = {
    name: undefined,
    ascending: true
  };
  paging: Paging = {
    page: 1,
    pageSize: 10
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private dataService: DataService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.dataSubscription = this.route.parent.data.subscribe(data => {
      this.organization = data['organization'];
      this.search();
    });
  }

  createNewInvoice() {
    this.router.navigate(['./create'], { relativeTo: this.route });
  }

  editDocument(document: Document) {
    this.router.navigate(['./', document.id], { relativeTo: this.route });
  }

  search() {
    const searchCriteria = new SearchCriteria();

    this.dataService.documents().search(this.organization, searchCriteria).subscribe(
      (data) => {
        this.searchResult = data;
      }
    );
  }

  /**
   * Actions
   */
  downloadXml(document: Document) {
    document.downloadXml();
  }

  downloadCdr(document: Document) {
    // this.dataService.organizationPeru().downloadInvoiceCdr(this.organization.organization, document.id);
  }

  downloadPdf(document: Document) {
    const queryParams: URLSearchParams = new URLSearchParams();
    queryParams.set('format', 'pdf');
    document.downloadReport(queryParams);
  }

  sendToCustomer(document: Document) {
    document.sendToCustomer().subscribe(result => {
      this.alertService.pop('success', 'Success', 'Success! Document sended to customer.');
    });
  }

  sendToThirdParty(invoice: Document) {
    invoice.sendToThirdParty().subscribe(result => {
      this.alertService.pop('success', 'Success', 'Success! Document sended to third party.');
    });
  }

  sendToCustomThridPartyByEmail(invoice: Document, content: any) {
    this.modalService.open(content).result.then((form: NgForm) => {
      if (form.valid) {
        invoice.sendToThirdPartyByEmail({ email: form.value.thirdPartyByEmail.email }).subscribe(data => {
          this.alertService.pop('success', 'Success', 'Success! Document sended to third party.');
        });
      }
    }, (reason) => {
    });
  }

  attachCreditNote(document: Document) {
    this.router.navigate(['../credit-notes', 'create', { invoice: document.documentId }], { relativeTo: this.route });
  }

  attachDebitNote(document: Document) {
    this.router.navigate(['../debit-notes', 'create', { invoice: document.documentId }], { relativeTo: this.route });
  }

  markAsVoided(document: Document) {
    this.router.navigate(['../voided-documents', 'create', { invoice: document.documentId }], { relativeTo: this.route });
  }

}
