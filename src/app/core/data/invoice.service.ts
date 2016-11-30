import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FileUploader } from 'ng2-file-upload';

import { RestangularOpenfact } from './restangular-openfact';
import { Organization } from '../models/organization.model';
import { Invoice } from '../models/invoice.model';
import { SearchResults } from '../models/search-results.model';
import { SearchCriteria } from '../models/search-criteria.model';

import { KeycloakHttp } from '../keycloak.http';

export const invoiceIdName: string = 'id';
export const invoiceBasePath: string = 'invoices';

@Injectable()
export class InvoiceService {

  constructor() { }

  public build(organization: Organization, id?: string): Invoice {
    let invoice = new Invoice();
    invoice.id = id;
    invoice.restangular = organization.restangular.one(invoiceBasePath, id);
    return invoice;
  }

  public findById(organization: Organization, id: string, queryParams?: URLSearchParams): Observable<Invoice> {
    let restangular = organization.restangular;
    return restangular
      .one(invoiceBasePath, id)
      .get(queryParams)
      .map(response => {
        let json = <Invoice>response.json();
        let result = new Invoice();
        result.restangular = restangular.one(invoiceBasePath, json[invoiceIdName]);
        result = Object.assign(result, json);
        return result;
      });
  }

  public findByIdAsJson(organization: Organization, id: string, queryParams?: URLSearchParams): Observable<any> {
    let restangular = organization.restangular;
    return restangular
      .one(invoiceBasePath, id)
      .all("representation/json")
      .get(queryParams)
      .map(response => {
        return response.json();
      });
  }

  public findByIdAsText(organization: Organization, id: string, queryParams?: URLSearchParams): Observable<string> {
    let restangular = organization.restangular;
    return restangular
      .one(invoiceBasePath, id)
      .all("representation/text")
      .get(queryParams)
      .map(response => {
        return response.text();
      });
  }

  public create(organization: Organization, invoice: Invoice): Observable<Invoice> {
    let restangular = organization.restangular;
    return restangular
      .all(invoiceBasePath)
      .post(invoice)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        }
        let json = <Invoice>response.json();
        let result = new Invoice();
        result.restangular = restangular.one(invoiceBasePath, json[invoiceIdName]);
        result = Object.assign(result, json);
        return result;
      });
  }

  public getFileUpload(organization: Organization): FileUploader {
    let restangular = organization.restangular.all(invoiceBasePath).all("upload");
    let upload = new FileUploader({
      url: restangular.path,
      headers: [KeycloakHttp.getToken()]
    });
    return upload;
  }

  public getAll(organization: Organization): Observable<Invoice[]> {
    let restangular = organization.restangular;
    return restangular
      .all(invoiceBasePath)
      .get()
      .map(response => {
        let json = <Invoice[]>response.json();
        let result = new Array<Invoice>();
        json.forEach(element => {
          let invoice = new Invoice();
          invoice.restangular = restangular.one(invoiceBasePath, element[invoiceIdName]);
          invoice = Object.assign(invoice, element);
          result.push(invoice);
        });
        return result;
      });
  }

  public search(organization: Organization, criteria: SearchCriteria): Observable<SearchResults<Invoice>> {
    let restangular = organization.restangular;
    return restangular
      .all(invoiceBasePath)
      .all("search")
      .post(criteria)
      .map(response => {
        let json = <SearchResults<Invoice>>response.json();
        let result = new SearchResults<Invoice>();
        let items = new Array<Invoice>();

        json.items.forEach(element => {
          let invoice = new Invoice();
          invoice.restangular = restangular.one(invoiceBasePath, element[invoiceIdName]);
          invoice = Object.assign(invoice, element);
          items.push(invoice);
        });

        result.items = items;
        result.totalSize = json.totalSize;
        return result;
      });
  }

  public getSendEvents(invoice: Invoice): Observable<any> {
    return invoice.restangular.all('send-events').get().map(response => {
      return response.json()
    });
  }

}
