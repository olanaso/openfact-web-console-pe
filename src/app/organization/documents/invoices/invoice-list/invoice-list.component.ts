import * as Collections from 'typescript-collections';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AlertService } from './../../../../core/alert/alert.service';
import { DataService } from './../../../../core/data/data.service';
import { Document } from './../../../../core/model/document.model';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderBy } from './../../../../core/model/order-by.model';
import { Organization } from './../../../../core/model/organization.model';
import { Paging } from './../../../../core/model/paging.model';
import { SearchCriteria } from './../../../../core/model/search-criteria.model';
import { SearchCriteriaFilter } from './../../../../core/model/search-criteria-filter.model';
import { SearchResults } from './../../../../core/model/search-results.model';
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

  // Search Criteria
  searchCriteria: SearchCriteria = {
    filterText: null
  };
  filters: Array<SearchCriteriaFilter> = new Array<SearchCriteriaFilter>();
  orderBy: OrderBy = {
    name: 'createdTimestamp',
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
    private alertService: AlertService) {
  }

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
    const criteria: SearchCriteria = {
      filterText: this.searchCriteria.filterText,
      filters: this.filters.map(f => {
        return new SearchCriteriaFilter(f.name, f.value, f.operator, f.type);
      }),
      orders: [this.orderBy],
      paging: this.paging
    };

    this.dataService.documents().search(this.organization, criteria).subscribe(
      (data) => {
        this.searchResult = data;
      }
    );
  }

  /**
   * Sort
   */
  changeAscending() {
    this.orderBy.ascending = !this.orderBy.ascending;
    this.search();
  }

  /**
   * Filters
   */

  clearFilters() {
    this.filters = new Array<SearchCriteriaFilter>();
    this.search();
  }

  removeFilter(index: number) {
    this.filters.splice(index, 1);
    this.search();
  }

  addBoletasFilter() {
    const filter = new SearchCriteriaFilter('documentId', 'B', 'like');
    filter.alias = 'Boletas';
    this.filters.push(filter);
    this.search();
  }

  addFacturasFilter() {
    const filter = new SearchCriteriaFilter('documentId', 'F', 'like');
    filter.alias = 'Facturas';
    this.filters.push(filter);
    this.search();
  }

  addNoEnviadosSunatFilter() {
    const filter = new SearchCriteriaFilter('requiredActions', 'SEND_TO_TRIRD_PARTY', 'in');
    filter.alias = 'No Enviados a Sunat';
    this.filters.push(filter);
    this.search();
  }

  addNoEnviadosClienteFilter() {
    const filter = new SearchCriteriaFilter('requiredActions', 'SEND_TO_CUSTOMER', 'in');
    filter.alias = 'No Enviados a Cliente';
    this.filters.push(filter);
    this.search();
  }

  addUltimaHoraFilter() {
    let date = new Date();
    date.setHours(date.getHours() - 1);
    const filter = new SearchCriteriaFilter('createdTimestamp', date, 'gt', 'DATETIME');
    filter.alias = 'Ultima Hora';
    this.filters.push(filter);
    this.search();
  }

  addUltimas24HorasFilter() {
    let date = new Date();
    date.setHours(date.getHours() - 24);
    const filter = new SearchCriteriaFilter('createdTimestamp', date, 'gt', 'DATETIME');
    filter.alias = 'Ultimas 24 Horas';
    this.filters.push(filter);
    this.search();
  }

  addUltimoMesFilter() {
    let date = new Date();
    date.setMonth(date.getMonth() - 1);
    const filter = new SearchCriteriaFilter('issueDateTime', date, 'gt', 'DATETIME');
    filter.alias = 'Ultimo mes';
    this.filters.push(filter);
    this.search();
  }

  /**
   * Actions
   */
  downloadXml(document: Document) {
    document.downloadXml();
  }

  downloadCdr(document: Document) {
    this.dataService.organizationsSunat().downloadDocumentCdr(this.organization.organization, document.id);
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
