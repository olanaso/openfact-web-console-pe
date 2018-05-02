import { OrganizationSunatInformation } from './../models/organization-sunat-information';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { cloneDeep } from 'lodash';
import { User, UserService } from '../../ngx-login-client';
import { Logger } from '../../ngx-base';
import { Observable } from 'rxjs/Observable';

import { OPENFACT_API_URL } from '../api/openfact-api';
import { Organization } from '../models/organization';
import { OrganizationAdditionalInformation } from './../models/organization-additional-information';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class OrganizationPeruService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private companiesUrl: string;

  constructor(
    private http: HttpClient,
    private logger: Logger,
    @Inject(OPENFACT_API_URL) apiUrl: string) {
    this.companiesUrl = apiUrl.endsWith('/') ? apiUrl + 'organizations' : apiUrl + '/organizations';
  }

  getInformacionAdicional(organizationId: string): Observable<OrganizationAdditionalInformation> {
    const url = `${this.companiesUrl}/${organizationId}/peru/informacion-adicional`;
    return this.http
      .get(url, { headers: this.headers })
      .map(response => {
        return response as OrganizationAdditionalInformation;
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  getInformacionSUNAT(organizationId: string): Observable<OrganizationSunatInformation> {
    const url = `${this.companiesUrl}/${organizationId}/peru/informacion-sunat`;
    return this.http
      .get(url, { headers: this.headers })
      .map(response => {
        return response as OrganizationSunatInformation;
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  updateInformacionAdicional(organization: OrganizationAdditionalInformation): Observable<OrganizationAdditionalInformation> {
    const url = `${this.companiesUrl}/${organization.id}/peru/informacion-adicional`;
    const payload = JSON.stringify(organization);
    return this.http
      .put(url, payload, { headers: this.headers })
      .map(response => {
        return response as OrganizationAdditionalInformation;
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  updateInformacionSunat(organization: OrganizationSunatInformation): Observable<OrganizationSunatInformation> {
    const url = `${this.companiesUrl}/${organization.id}/peru/informacion-sunat`;
    const payload = JSON.stringify(organization);
    return this.http
      .put(url, payload, { headers: this.headers })
      .map(response => {
        return response as OrganizationAdditionalInformation;
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
