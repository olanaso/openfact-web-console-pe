import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RestangularOpenfact } from './restangular-openfact';
import { Organization } from '../models/organization.model';
import { CreditNote } from '../models/credit-note.model';
import { SearchResults } from '../models/search-results.model';
import { SearchCriteria } from '../models/search-criteria.model';

export const creditNoteIdName: string = 'id';
export const creditNoteBasePath: string = 'credit-notes';

@Injectable()
export class CreditnoteService {

  constructor() { }

  public findById(organization: Organization, id: string): Observable<CreditNote> {
    let restangular = organization.restangular;
    return restangular
      .one(creditNoteIdName, id)
      .get()
      .map(response => {
        let json = <CreditNote>response.json();
        let result = new CreditNote();
        result.restangular = restangular.one(creditNoteIdName, json[creditNoteBasePath]);
        result = Object.assign(result, json);
        return result;
      });
  }

  public create(organization: Organization, creditnote: CreditNote): Observable<CreditNote> {
    let restangular = organization.restangular;
    return restangular
      .all(creditNoteIdName)
      .post(creditnote)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        }
        let json = <CreditNote>response.json();
        let result = new CreditNote();
        result.restangular = restangular.one(creditNoteIdName, json[creditNoteBasePath]);
        result = Object.assign(result, json);
        return result;
      });
  }

  public getAll(organization: Organization): Observable<CreditNote[]> {
    let restangular = organization.restangular;
    return restangular
      .all(creditNoteIdName)
      .get()
      .map(response => {
        let json = <CreditNote[]>response.json();
        let result = new Array<CreditNote>();
        json.forEach(element => {
          let creditnote = new CreditNote();
          creditnote.restangular = restangular.one(creditNoteIdName, element[creditNoteBasePath]);
          creditnote = Object.assign(creditnote, element);
          result.push(creditnote);
        });
        return result;
      });
  }

  public search(organization: Organization, criteria: SearchCriteria): Observable<SearchResults<CreditNote>> {
    let restangular = organization.restangular;
    return restangular
      .all(creditNoteIdName)
      .all("search")
      .post(criteria)
      .map(response => {
        let json = <SearchResults<CreditNote>>response.json();
        let result = new SearchResults<CreditNote>();
        let items = new Array<CreditNote>();

        json.items.forEach(element => {
          let creditnote = new CreditNote();
          creditnote.restangular = restangular.one(creditNoteIdName, element[creditNoteBasePath]);
          creditnote = Object.assign(creditnote, element);
          items.push(creditnote);
        });

        result.items = items;
        result.totalSize = json.totalSize;
        return result;
      });
  }

}
