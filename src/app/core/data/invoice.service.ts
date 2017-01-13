import { Injectable } from '@angular/core';
import { Response, Headers, URLSearchParams, ResponseContentType } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { FileUploader } from 'ng2-file-upload';
import { saveAs } from 'file-saver';

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
    return new Invoice(organization.restangular.one(invoiceBasePath, id)).setId(id);
  }

  public findById(organization: Organization, id: string, queryParams?: URLSearchParams): Observable<Invoice> {
    let restangular = organization.restangular;
    return restangular
      .one(invoiceBasePath, id)
      .get(queryParams)
      .map(response => {
        let data = <Invoice>response.json();
        let invoice = new Invoice(restangular.one(invoiceBasePath, data[invoiceIdName]));
        return Object.assign(invoice, data);
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
        } else {
          let data = <Invoice>response.json();
          let invoice = new Invoice(restangular.one(invoiceBasePath, data[invoiceIdName]));
          return Object.assign(invoice, data);
        }
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

  public getAll(organization: Organization, queryParams?: URLSearchParams): Observable<Invoice[]> {
    let restangular = organization.restangular;
    return restangular
      .all(invoiceBasePath)
      .get(queryParams)
      .map(response => {
        let arrayData = <Invoice[]>response.json();
        let result = new Array<Invoice>();
        arrayData.forEach(element => {
          let invoice = new Invoice(restangular.one(invoiceBasePath, element[invoiceIdName]));
          result.push(Object.assign(invoice, element));
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
          let invoice = new Invoice(restangular.one(invoiceBasePath, element[invoiceIdName]));
          items.push(Object.assign(invoice, element));
        });

        result.items = items;
        result.totalSize = json.totalSize;
        return result;
      });
  }

}
