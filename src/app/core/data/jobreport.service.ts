import { Injectable } from '@angular/core';
import { Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { RestangularOpenfact } from './restangular-openfact';
import { Organization } from '../models/organization.model';
import { SearchResults } from '../models/search-results.model';
import { SearchCriteria } from '../models/search-criteria.model';

export const jobReportBasePath: string = 'job-reports';

@Injectable()
export class JobreportService {

  constructor() { }

  public getProviders(organization: Organization, queryParams?: URLSearchParams): Observable<any> {
    let restangular = organization.restangular;
    return restangular
      .all(jobReportBasePath)
      .all("providers")
      .get(queryParams)
      .map(response => response.json());
  }

public getAll(organization: Organization, queryParams?: URLSearchParams): Observable<any[]> {
    let restangular = organization.restangular;
    return restangular
      .all(jobReportBasePath)
      .get(queryParams)
      .map(response => <any[]>response.json());
  }

}
