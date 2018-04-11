import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Logger } from '../../ngx-base';
import { User, UserService } from '../../ngx-login-client';

import { OPENFACT_API_URL } from '../api/openfact-api';
import { Organization } from '../models/organization';
import { OrganizationSearchResult } from './../models/organization-search-result';

import { Observable } from 'rxjs/Observable';

import { cloneDeep } from 'lodash';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class OrganizationService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private organizationUrl: string;

  constructor(
    private http: HttpClient,
    private logger: Logger,
    private userService: UserService,
    @Inject(OPENFACT_API_URL) apiUrl: string) {
    this.organizationUrl = apiUrl.endsWith('/') ? apiUrl + 'organizations' : apiUrl + '/organizations';
  }

  getOrganization(organizationId: string): Observable<Organization> {
    const url = `${this.organizationUrl}/${organizationId}`;
    return this.http.get(url, { headers: this.headers })
      .map((response) => {
        return response as Organization;
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  create(organization: Organization): Observable<Organization> {
    const url = this.organizationUrl;
    const payload = JSON.stringify(organization);
    return this.http
      .post(url, payload, { headers: this.headers })
      .map(response => {
        return response as Organization;
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  update(organization: Organization): Observable<Organization> {
    const url = `${this.organizationUrl}/${organization.id}`;
    const payload = JSON.stringify(organization);
    return this.http
      .put(url, payload, { headers: this.headers })
      .map(response => {
        return response as Organization;
      })
      .switchMap(val => {
        return this.resolveOwner(val);
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  delete(organization: Organization): Observable<Organization> {
    const url = `${this.organizationUrl}/${organization.id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .map(() => { })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  // Extra

  filterOrganizationById(organizationId: string): Observable<Organization> {
    return this.filterCompaniesById(organizationId).map(val => {
      for (const u of val) {
        if (organizationId === u.id) {
          return u;
        }
      }
      return null;
    });
  }

  searchCompaniesByUserid(userId: string): Observable<OrganizationSearchResult> {
    const url = `${this.organizationUrl}/search`;
    return this.http
      .post(url, { userId: userId }, { headers: this.headers })
      .map(response => {
        return response as OrganizationSearchResult;
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  // Keys

  getKeys(organizationId: string, params?: HttpParams): Observable<any> {
    const url = `${this.organizationUrl}/${organizationId}/keys`;
    return this.http
      .get(url, { params: params, headers: this.headers })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  // Components

  getComponents(organizationId: string, params?: HttpParams) {
    const url = `${this.organizationUrl}/${organizationId}/components`;
    return this.http
      .get(url, { params: params, headers: this.headers })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  getComponentById(organizationId: string, componentId: string, params?: HttpParams) {
    const url = `${this.organizationUrl}/${organizationId}/components/${componentId}`;
    return this.http
      .get(url, { params: params, headers: this.headers })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  createComponent(organizationId: string, component: any): Observable<any> {
    const url = `${this.organizationUrl}/${organizationId}/components`;
    return this.http
      .post(url, component, { headers: this.headers })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  updateComponent(organizationId: string, componentId: string, component: any): Observable<any> {
    const url = `${this.organizationUrl}/${organizationId}/components/${componentId}`;
    return this.http
      .put(url, component, { headers: this.headers })
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

  private resolveOwner(organization: Organization): Observable<Organization> {
    organization.relationalData = organization.relationalData || {};

    if (!organization.owner) {
      organization.relationalData.owner = {} as User;
      return Observable.of(organization);
    }

    return this.userService
      .searchUserByUserId(organization.owner.id)
      .map(owner => {
        organization.relationalData.owner = owner;
        return organization;
      });
  }

  private resolveOwners(companies: Organization[]): Observable<Organization[]> {
    if (companies.length === 0) {
      return Observable.of(companies);
    }

    return Observable
      // Get a stream of companies
      .from(companies)
      // Map to a stream of owner Ids of these companies
      .map(organization => organization.owner.id)
      // Get only the unique owners in this stream of owner Ids
      .distinct()
      // Get the users from the server based on the owner Ids
      // and flatten the resulting stream , observables are returned
      .flatMap(ownerId => {
        return this.userService.searchUserByUserId(ownerId).catch(err => {
          console.log('Error fetching user', ownerId, err);
          return Observable.empty<User>();
        });
      })
      // map the user objects back to the companies to return a stream of companies
      .map(owner => {
        if (owner) {
          for (const organization of companies) {
            organization.relationalData = organization.relationalData || {};
            if (owner.id === organization.owner.id) {
              organization.relationalData.owner = owner;
            }
          }
        }
        return companies;
      });
  }

  private filterCompaniesById(organizationId: string): Observable<Organization[]> {
    return this.http
      .get(`${this.organizationUrl}?organizationId=${organizationId}`, { headers: this.headers })
      .map(response => {
        return response as Organization[];
      });
  }

}
