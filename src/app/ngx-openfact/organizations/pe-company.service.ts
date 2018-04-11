import { PECompany } from './../models/pe-company';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { cloneDeep } from 'lodash';
import { User, UserService } from '../../ngx-login-client';
import { Logger } from '../../ngx-base';
import { Observable } from 'rxjs/Observable';

import { OPENFACT_API_URL } from '../api/openfact-api';
import { Organization } from '../models/organization';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class PECompanyService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private companiesUrl: string;

  constructor(
    private http: HttpClient,
    private logger: Logger,
    @Inject(OPENFACT_API_URL) apiUrl: string) {
    this.companiesUrl = apiUrl.endsWith('/') ? apiUrl + 'organizations' : apiUrl + '/organizations';
  }

  get(companyId: string): Observable<PECompany> {
    const url = `${this.companiesUrl}/${companyId}/pe`;
    return this.http
      .get(url, { headers: this.headers })
      .map(response => {
        return response as PECompany;
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  update(company: PECompany): Observable<PECompany> {
    const url = `${this.companiesUrl}/${company.id}/pe`;
    const payload = JSON.stringify(company);
    return this.http
      .put(url, payload, { headers: this.headers })
      .map(response => {
        return response as PECompany;
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  /**
   * Private
   */

  private handleError(error: any) {
    this.logger.error(error);
    return Observable.throw(error.message || error);
  }

}
