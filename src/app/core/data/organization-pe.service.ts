import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response, URLSearchParams, RequestOptionsArgs, Headers, ResponseContentType } from '@angular/http';
import { RestangularOpenfact } from './restangular-openfact';
import { Organization } from '../models/organization.model';
import { SearchResults } from '../models/search-results.model';
import { SearchCriteria } from '../models/search-criteria.model';
import { KeysMetadata } from '../models/keys-metadata.model';

import { Invoice } from '../models/invoice.model';
import { saveAs } from 'file-saver';

export const idName: string = 'id';
export const basePath: string = 'sunat';

@Injectable()
export class OrganizationPeService {

  private restangular: RestangularOpenfact;

  constructor(restangular: RestangularOpenfact) {
    this.restangular = restangular;
  }

  public createInvoice(organization: Organization, invoice: Invoice): Observable<Invoice> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all("invoices")
      .post(invoice)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        }
        return response.json();
      });
  }

  public createCreditNote(organization: Organization, creditNote: any): Observable<Invoice> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all("credit-notes")
      .post(creditNote)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        }
        return response.json();
      });
  }

  public createDebitNote(organization: Organization, debitNote: any): Observable<Invoice> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all("debit-notes")
      .post(debitNote)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        }
        return response.json();
      });
  }

  public downloadInvoiceCdr(organizationName: string, invoiceId: string) {
    let options: RequestOptionsArgs = {
      responseType: ResponseContentType.Blob
    };

    return this.restangular
      .one("organizations", organizationName)
      .one("sunat/invoices", invoiceId)
      .all("cdr")
      .get(null, options)
      .map(response => {
        let file = {
          file: response.blob(),
          fileName: "cdr.zip"
        };
        return file;
      }).subscribe(result => {
        saveAs(result.file, result.fileName);
      }, error => {
        Observable.throw(error);
      });
  }

  public downloadCreditNoteCdr(organizationName: string, creditNoteId: string) {
    let options: RequestOptionsArgs = {
      responseType: ResponseContentType.Blob
    };

    return this.restangular
      .one("organizations", organizationName)
      .one("sunat/credit-notes", creditNoteId)
      .all("cdr")
      .get(null, options)
      .map(response => {
        let file = {
          file: response.blob(),
          fileName: 'cdr.zip'
        };
        return file;
      }).subscribe(result => {
        saveAs(result.file, result.fileName);
      }, error => {
        Observable.throw(error);
      });
  }

  public downloadDebitNoteCdr(organizationName: string, debitNoteId: string) {
    let options: RequestOptionsArgs = {
      responseType: ResponseContentType.Blob
    };

    return this.restangular
      .one("organizations", organizationName)
      .one("sunat/debit-notes", debitNoteId)
      .all("cdr")
      .get(null, options)
      .map(response => {
        let file = {
          file: response.blob(),
          fileName: 'cdr.xml'
        };
        return file;
      }).subscribe(result => {
        saveAs(result.file, result.fileName);
      }, error => {
        Observable.throw(error);
      });
  }

}
