import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RestangularOpenfact } from './restangular-openfact';
import { Organization, Invoice } from '../models';
import { SearchResults, SearchCriteria } from '../models';

export const INVOICE_ID_NAME: string = 'id';
export const INVOICE_BASE_PATH: string = 'invoices';

@Injectable()
export class InvoiceService {

  constructor() { }

  public findById(organization: Organization, id: string): Observable<Invoice> {
    let restangular = organization.restangular;
    return restangular
      .one(INVOICE_BASE_PATH, id)
      .get()
      .map(response => {
        let json = <Invoice>response.json();
        let result = new Invoice();
        result.restangular = restangular.one(INVOICE_BASE_PATH, json[INVOICE_ID_NAME]);
        result = Object.assign(result, json);
        return result;
      });
  }

  public create(organization: Organization, invoice: Invoice): Observable<Invoice> {
    let restangular = organization.restangular;
    return restangular
      .all(INVOICE_BASE_PATH)
      .post(invoice)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        }
        let json = <Invoice>response.json();
        let result = new Invoice();
        result.restangular = restangular.one(INVOICE_BASE_PATH, json[INVOICE_ID_NAME]);
        result = Object.assign(result, json);
        return result;
      });
  }

  public getAll(organization: Organization): Observable<Invoice[]> {
    let restangular = organization.restangular;
    return restangular
      .all(INVOICE_BASE_PATH)
      .get()
      .map(response => {
        let json = <Invoice[]>response.json();
        let result = new Array<Invoice>();
        json.forEach(element => {
          let invoice = new Invoice();
          invoice.restangular = restangular.one(INVOICE_BASE_PATH, element[INVOICE_ID_NAME]);
          invoice = Object.assign(invoice, element);
          result.push(invoice);
        });
        return result;
      });
  }

  public search(organization: Organization, criteria: SearchCriteria): Observable<SearchResults<Invoice>> {
    let restangular = organization.restangular;
    return restangular
      .all(INVOICE_BASE_PATH)
      .all("search")
      .post(criteria)
      .map(response => {
        let json = <SearchResults<Invoice>>response.json();
        let result = new SearchResults<Invoice>();
        let items = new Array<Invoice>();

        json.items.forEach(element => {
          let invoice = new Invoice();
          invoice.restangular = restangular.one(INVOICE_BASE_PATH, element[INVOICE_ID_NAME]);
          invoice = Object.assign(invoice, element);
          items.push(invoice);
        });

        result.items = items;
        result.totalSize = json.totalSize;
        return result;
      });
  }

}
