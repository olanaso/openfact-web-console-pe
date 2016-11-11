import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RestangularOpenfact } from './restangular-openfact';
import { Organization } from '../';
import { SearchResults, SearchCriteria } from '../';

export const SERVER_INFO_BASE_PATH: string = 'serverinfo';

@Injectable()
export class ServerInfoService {

  private restangular: RestangularOpenfact;

  constructor(restangular: RestangularOpenfact) {
    this.restangular = restangular;
  }

  public get(): Observable<any> {
    return this.restangular
      .all(SERVER_INFO_BASE_PATH)
      .get()
      .map(response => {
        let json = <any>response.json();
        return json;
      });
  }

}
