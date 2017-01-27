import { Document } from './../model/document.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Organization } from './../model/organization.model';
import { SearchCriteria } from './../model/search-criteria.model';
import { SearchResults } from './../model/search-results.model';

@Injectable()
export class DocumentService {

  constructor() { }

  public search(organization: Organization, criteria: SearchCriteria): Observable<SearchResults<Document>> {
    const restangular = organization.restangular;
    return restangular
      .all('documents')
      .all('search')
      .post(criteria)
      .map(response => {
        const json = response.json();

        const result = new SearchResults<Document>();
        const items = new Array<Document>();

        json.items.forEach(element => {
          const document = new Document(restangular.one(element['id'], ''));
          items.push(Object.assign(document, element));
        });

        result.items = items;
        result.totalSize = json.totalSize;
        return result;
      });
  }

}
