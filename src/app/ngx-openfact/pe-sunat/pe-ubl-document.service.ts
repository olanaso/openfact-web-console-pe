import { Invoice } from './../models/invoice';
import { OPENFACT_API_URL } from './../api/openfact-api';
import { SearchResult } from '../models/search-result';
import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { cloneDeep } from 'lodash';
import { Logger } from '../../ngx-base';
import { Observable } from 'rxjs/Observable';
import { UBLDocument } from '../models/ubl-document';

@Injectable()
export class PEUBLDocumentService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private organizationUrl: string;

  constructor(
    private http: HttpClient,
    private logger: Logger,
    @Inject(OPENFACT_API_URL) apiUrl: string) {
    this.organizationUrl = apiUrl.endsWith('/') ? apiUrl + 'organizations' : apiUrl + '/organizations';
  }

  createFactura(organizationId: string, document: Invoice): Observable<Invoice> {
    return this.http
      .post(`${this.organizationUrl}/${organizationId}/pe/documentos/facturas`, document, { headers: this.headers })
      .map(response => {
        return response as Invoice;
      });
  }

  createBoleta(organizationId: string, document: Invoice): Observable<Invoice> {
    return this.http
      .post(`${this.organizationUrl}/${organizationId}/pe/documentos/boletas`, document, { headers: this.headers })
      .map(response => {
        return response as Invoice;
      });
  }

  getFacturas(organizationId: string, estado: string, offset: number, limit: number = 10): Observable<Invoice[]> {
    const url = `${this.organizationUrl}/${organizationId}/pe/documentos/facturas?estado=${estado}&offset=${offset}&limit=${limit}`;
    return this.http
      .get(url, { headers: this.headers })
      .map(response => {
        return response as Invoice[];
      });
  }

  getBoletas(organizationId: string, estado: string, offset: number, limit: number = 10): Observable<Invoice[]> {
    const url = `${this.organizationUrl}/${organizationId}/pe/documentos/boletas?estado=${estado}&offset=${offset}&limit=${limit}`;
    return this.http
      .get(url, { headers: this.headers })
      .map(response => {
        return response as Invoice[];
      });
  }

}
