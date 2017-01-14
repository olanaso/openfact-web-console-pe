import { Injectable } from '@angular/core';
import { Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FileUploader } from 'ng2-file-upload';

import { RestangularOpenfact } from './restangular-openfact';
import { Organization } from '../models/organization.model';
import { CreditNote } from '../models/credit-note.model';
import { SearchResults } from '../models/search-results.model';
import { SearchCriteria } from '../models/search-criteria.model';

import { KeycloakHttp } from '../keycloak.http';

export const creditNoteIdName: string = 'id';
export const creditNoteBasePath: string = 'credit-notes';

@Injectable()
export class CreditnoteService {

  constructor() { }

  public build(organization: Organization, id?: string): CreditNote {
    return new CreditNote(organization.restangular.one(creditNoteBasePath, id)).setId(id);
  }

  public findById(organization: Organization, id: string, queryParams?: URLSearchParams): Observable<CreditNote> {
    let restangular = organization.restangular;
    return restangular
      .one(creditNoteBasePath, id)
      .get(queryParams)
      .map(response => {
        let data = <CreditNote>response.json();
        let creditNote = new CreditNote(restangular.one(creditNoteBasePath, data[creditNoteIdName]));
        return Object.assign(creditNote, data);
      });
  }

  public create(organization: Organization, creditnote: CreditNote): Observable<CreditNote> {
    let restangular = organization.restangular;
    return restangular
      .all(creditNoteBasePath)
      .post(creditnote)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        } else {
          let data = <CreditNote>response.json();
          let creditNote = new CreditNote(restangular.one(creditNoteBasePath, data[creditNoteIdName]));
          return Object.assign(creditNote, data);
        }
      });
  }

  public getFileUpload(organization: Organization): FileUploader {
    let restangular = organization.restangular.all(creditNoteBasePath).all("upload");
    let upload = new FileUploader({
      url: restangular.path,
      headers: [KeycloakHttp.getToken()]
    });
    return upload;
  }

  public getAll(organization: Organization): Observable<CreditNote[]> {
    let restangular = organization.restangular;
    return restangular
      .all(creditNoteBasePath)
      .get()
      .map(response => {
        let arrayData = <CreditNote[]>response.json();
        let result = new Array<CreditNote>();
        arrayData.forEach(element => {
          let creditNote = new CreditNote(restangular.one(creditNoteBasePath, element[creditNoteIdName]));
          result.push(Object.assign(creditNote, element));
        });
        return result;
      });
  }

  public search(organization: Organization, criteria: SearchCriteria): Observable<SearchResults<CreditNote>> {
    let restangular = organization.restangular;
    return restangular
      .all(creditNoteBasePath)
      .all("search")
      .post(criteria)
      .map(response => {
        let json = <SearchResults<CreditNote>>response.json();
        let result = new SearchResults<CreditNote>();
        let items = new Array<CreditNote>();

        json.items.forEach(element => {
          let creditNote = new CreditNote(restangular.one(creditNoteBasePath, element[creditNoteIdName]));
          items.push(Object.assign(creditNote, element));
        });

        result.items = items;
        result.totalSize = json.totalSize;
        return result;
      });
  }

}
