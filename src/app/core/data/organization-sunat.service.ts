import { Document } from './../model/document.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Organization } from './../model/organization.model';
import { RestangularService } from './restangular.service';

export const genericIdName = 'id';
export const basePath = 'sunat';
export const extensionPath = 'ubl-extensions';
export const genericBasePath = 'generic-types';

@Injectable()
export class OrganizationSunatService {

  constructor(private restangular: RestangularService) { }

  createInvoice(organizationName: string, document: any): Observable<any> {
    return this.restangular.one('organizations', organizationName)
      .all(basePath)
      .all('document-extensions/invoices')
      .post(document)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        }
        return response.json();
      });
  }

  createCreditnote(organizationName: string, invoice: any): Observable<any> {
    return this.restangular.one('organizations', organizationName)
      .all(basePath)
      .all('document-extensions/credit-notes')
      .post(invoice)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        }
        return response.json();
      });
  }

  createDebitNotes(organizationName: string, invoice: any): Observable<any> {
    return this.restangular.one('organizations', organizationName)
      .all(basePath)
      .all('document-extensions/debit-notes')
      .post(invoice)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        }
        return response.json();
      });
  }

  getAllTiposComprobantePago(organizationName: string): Observable<any> {
    return this.restangular.one('organizations', organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all('tipos-comprobante-pago')
      .get()
      .map(response => response.json());
  }

  getAllTiposDocumentEntidad(organizationName: string): Observable<any> {
    return this.restangular.one('organizations', organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all('tipos-documento-entidad')
      .get()
      .map(response => response.json());
  }

  getAllTiposAfectacionIGV(organizationName: string): Observable<any> {
    return this.restangular.one('organizations', organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all('tipos-afectacion-igv')
      .get()
      .map(response => response.json());
  }

  getIgv(organizationName: string): Observable<any> {
    return this.restangular.one('organizations', organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all('igv')
      .get()
      .map(response => response.json());
  }

}
