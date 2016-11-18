import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RestangularOpenfact } from './restangular-openfact';
import { Organization } from '../models/organization.model';
import { SearchResults } from '../models/search-results.model';
import { SearchCriteria } from '../models/search-criteria.model';

export const serverInfoBasePath: string = 'events';

@Injectable()
export class EventService {

  private restangular: RestangularOpenfact;

  constructor(restangular: RestangularOpenfact) {
    this.restangular = restangular;
  }

  public getConfig(): Observable<any> {
    return this.restangular
      .all(serverInfoBasePath)
      .get()
      .map(response => {
        let json = <any>response.json();
        return json;
      });
  }

}
