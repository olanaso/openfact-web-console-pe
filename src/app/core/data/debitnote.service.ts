import { Injectable } from '@angular/core';
import { Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FileUploader } from 'ng2-file-upload';

import { RestangularOpenfact } from './restangular-openfact';
import { Organization } from '../models/organization.model';
import { DebitNote } from '../models/debit-note.model';
import { SearchResults } from '../models/search-results.model';
import { SearchCriteria } from '../models/search-criteria.model';

import { KeycloakHttp } from '../keycloak.http';

export const debitNoteIdName: string = 'id';
export const debitNoteBasePath: string = 'debit-notes';

@Injectable()
export class DebitnoteService {

  constructor() { }

  public findById(organization: Organization, id: string, queryParams?: URLSearchParams): Observable<DebitNote> {
    let restangular = organization.restangular;
    return restangular
      .one(debitNoteBasePath, id)
      .get(queryParams)
      .map(response => {
        let json = <DebitNote>response.json();
        let result = new DebitNote();
        result.restangular = restangular.one(debitNoteBasePath, json[debitNoteIdName]);
        result = Object.assign(result, json);
        return result;
      });
  }

  public create(organization: Organization, debitnote: DebitNote): Observable<DebitNote> {
    let restangular = organization.restangular;
    return restangular
      .all(debitNoteBasePath)
      .post(debitnote)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        }
        let json = <DebitNote>response.json();
        let result = new DebitNote();
        result.restangular = restangular.one(debitNoteBasePath, json[debitNoteIdName]);
        result = Object.assign(result, json);
        return result;
      });
  }

  public getFileUpload(organization: Organization): FileUploader {
    let restangular = organization.restangular.all(debitNoteBasePath).all("xml");
    let upload = new FileUploader({
      url: restangular.path,
      headers: [KeycloakHttp.getToken()]
    });
    return upload;
  }

  public getAll(organization: Organization): Observable<DebitNote[]> {
    let restangular = organization.restangular;
    return restangular
      .all(debitNoteBasePath)
      .get()
      .map(response => {
        let json = <DebitNote[]>response.json();
        let result = new Array<DebitNote>();
        json.forEach(element => {
          let debitnote = new DebitNote();
          debitnote.restangular = restangular.one(debitNoteBasePath, element[debitNoteIdName]);
          debitnote = Object.assign(debitnote, element);
          result.push(debitnote);
        });
        return result;
      });
  }

  public search(organization: Organization, criteria: SearchCriteria): Observable<SearchResults<DebitNote>> {
    let restangular = organization.restangular;
    return restangular
      .all(debitNoteBasePath)
      .all("search")
      .post(criteria)
      .map(response => {
        let json = <SearchResults<DebitNote>>response.json();
        let result = new SearchResults<DebitNote>();
        let items = new Array<DebitNote>();

        json.items.forEach(element => {
          let debitnote = new DebitNote();
          debitnote.restangular = restangular.one(debitNoteBasePath, element[debitNoteIdName]);
          debitnote = Object.assign(debitnote, element);
          items.push(debitnote);
        });

        result.items = items;
        result.totalSize = json.totalSize;
        return result;
      });
  }

}
