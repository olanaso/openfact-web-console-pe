import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RestangularOpenfact } from './restangular-openfact';
import { Organization } from '../models/organization';
import { CreditNote } from '../models/credit-note';
import { SearchResults } from '../search/search-results';
import { SearchCriteria } from '../search/search-criteria';

export const CREDITNOTE_ID_NAME: string = 'id';
export const CREDITNOTE_BASE_PATH: string = 'credit-notes';

@Injectable()
export class CreditnoteService {

  constructor() { }

  public findById(organization: Organization, id: string): Observable<CreditNote> {
    let restangular = organization.restangular;
    return restangular
      .one(CREDITNOTE_BASE_PATH, id)
      .get()
      .map(response => {
        let json = <CreditNote>response.json();
        let result = new CreditNote();
        result.restangular = restangular.one(CREDITNOTE_BASE_PATH, json[CREDITNOTE_ID_NAME]);
        result = Object.assign(result, json);
        return result;
      });
  }

  public create(organization: Organization, creditnote: CreditNote): Observable<CreditNote> {
    let restangular = organization.restangular;
    return restangular
      .all(CREDITNOTE_BASE_PATH)
      .post(creditnote)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        }
        let json = <CreditNote>response.json();
        let result = new CreditNote();
        result.restangular = restangular.one(CREDITNOTE_BASE_PATH, json[CREDITNOTE_ID_NAME]);
        result = Object.assign(result, json);
        return result;
      });
  }

  public getAll(organization: Organization): Observable<CreditNote[]> {
    let restangular = organization.restangular;
    return restangular
      .all(CREDITNOTE_BASE_PATH)
      .get()
      .map(response => {
        let json = <CreditNote[]>response.json();
        let result = new Array<CreditNote>();
        json.forEach(element => {
          let creditnote = new CreditNote();
          creditnote.restangular = restangular.one(CREDITNOTE_BASE_PATH, element[CREDITNOTE_ID_NAME]);
          creditnote = Object.assign(creditnote, element);
          result.push(creditnote);
        });
        return result;
      });
  }

  public search(organization: Organization, criteria: SearchCriteria): Observable<SearchResults<CreditNote>> {
    let restangular = organization.restangular;
    return restangular
      .all(CREDITNOTE_BASE_PATH)
      .all("search")
      .post(criteria)
      .map(response => {
        let json = <SearchResults<CreditNote>>response.json();
        let result = new SearchResults<CreditNote>();
        let items = new Array<CreditNote>();

        json.items.forEach(element => {
          let creditnote = new CreditNote();
          creditnote.restangular = restangular.one(CREDITNOTE_BASE_PATH, element[CREDITNOTE_ID_NAME]);
          creditnote = Object.assign(creditnote, element);
          items.push(creditnote);
        });

        result.items = items;
        result.totalSize = json.totalSize;
        return result;
      });
  }

}
