import { OPENFACT_API_URL } from './../api/openfact-api';
import { SearchResult } from '../models/search-result';
import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { cloneDeep } from 'lodash';
import { Logger } from '../../ngx-base';
import { Observable } from 'rxjs/Observable';
import { UBLDocument } from '../models/ubl-document';

@Injectable()
export class UBLDocumentService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private documentsUrl: string;

  constructor(
    private http: HttpClient,
    private logger: Logger,
    @Inject(OPENFACT_API_URL) apiUrl: string) {
    this.documentsUrl = apiUrl.endsWith('/') ? apiUrl + 'documents' : apiUrl + '/documents';
  }

  searchDocumentById(documentId: string): Observable<UBLDocument> {
    return this.filterDocumentsById(documentId).map(val => {
      for (const u of val) {
        if (documentId === u.id) {
          return u;
        }
      }
      return null;
    });
  }

  private filterDocumentsById(documentId: string): Observable<UBLDocument[]> {
    return this.http
      .get(`${this.documentsUrl}?companyId=${documentId}`, { headers: this.headers })
      .map(response => {
        return response as UBLDocument[];
      });
  }

}
