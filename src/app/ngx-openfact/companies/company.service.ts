import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { cloneDeep } from 'lodash';
import { User, UserService } from '../../ngx-login-client';
import { Logger } from '../../ngx-base';
import { Observable } from 'rxjs/Observable';

import { OPENFACT_API_URL } from '../api/openfact-api';
import { Company } from '../models/company';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CompanyService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private companiesUrl: string;

  constructor(
    private http: HttpClient,
    private logger: Logger,
    private userService: UserService,
    @Inject(OPENFACT_API_URL) apiUrl: string) {
    this.companiesUrl = apiUrl.endsWith('/') ? apiUrl + 'companies' : apiUrl + '/companies';
  }

  getCompanies(userId: string, role: string = 'owner'): Observable<Company[]> {
    const url = this.companiesUrl;
    let params: HttpParams = new HttpParams();
    params = params.set('userId', userId);
    params = params.set('role', role);

    return this.http
      .get(url, { params: params, headers: this.headers })
      .map(response => {
        return response as Company[];
      })
      .switchMap(val => {
        return this.resolveOwners(val);
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  searchCompanyById(companyId: string): Observable<Company> {
    return this.filterCompaniesById(companyId).map(val => {
      for (const u of val) {
        if (companyId === u.id) {
          return u;
        }
      }
      return null;
    });
  }

  create(company: Company): Observable<Company> {
    const url = this.companiesUrl;
    const payload = JSON.stringify(company);
    return this.http
      .post(url, payload, { headers: this.headers })
      .map(response => {
        return response as Company;
      })
      .switchMap(val => {
        return this.resolveOwner(val);
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  getCompanyById(companyId: string): Observable<Company> {
    const url = `${this.companiesUrl}/${companyId}`;
    return this.http.get(url, { headers: this.headers })
      .map((response) => {
        return response as Company;
      })
      .switchMap(val => this.resolveOwner(val))
      .catch((error) => {
        return this.handleError(error);
      });
  }

  update(company: Company): Observable<Company> {
    const url = `${this.companiesUrl}/${company.id}`;
    const payload = JSON.stringify(company);
    return this.http
      .put(url, payload, { headers: this.headers })
      .map(response => {
        return response as Company;
      })
      .switchMap(val => {
        return this.resolveOwner(val);
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  delete(company: Company): Observable<Company> {
    const url = `${this.companiesUrl}/${company.id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .map(() => { })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  getKeys(companyId: string, params?: HttpParams): Observable<any> {
    const url = `${this.companiesUrl}/${companyId}/keys`;
    return this.http
      .get(url, { params: params, headers: this.headers })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  getComponents(companyId: string, params?: HttpParams) {
    const url = `${this.companiesUrl}/${companyId}/components`;
    return this.http
      .get(url, { params: params, headers: this.headers })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  getComponentById(companyId: string, componentId: string, params?: HttpParams) {
    const url = `${this.companiesUrl}/${companyId}/components/${componentId}`;
    return this.http
      .get(url, { params: params, headers: this.headers })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  createComponent(companyId: string, component: any): Observable<any> {
    const url = `${this.companiesUrl}/${companyId}/components`;
    return this.http
      .post(url, component, { headers: this.headers })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  updateComponent(companyId: string, componentId:string, component: any): Observable<any> {
    const url = `${this.companiesUrl}/${companyId}/components/${componentId}`;
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

  private resolveOwner(company: Company): Observable<Company> {
    company.relationalData = company.relationalData || {};

    if (!company.owner) {
      company.relationalData.owner = {} as User;
      return Observable.of(company);
    }

    return this.userService
      .searchUserByUserId(company.owner.id)
      .map(owner => {
        company.relationalData.owner = owner;
        return company;
      });
  }

  private resolveOwners(companies: Company[]): Observable<Company[]> {
    if (companies.length === 0) {
      return Observable.of(companies);
    }

    return Observable
      // Get a stream of companies
      .from(companies)
      // Map to a stream of owner Ids of these companies
      .map(company => company.owner.id)
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
          for (const company of companies) {
            company.relationalData = company.relationalData || {};
            if (owner.id === company.owner.id) {
              company.relationalData.owner = owner;
            }
          }
        }
        return companies;
      });
  }

  private filterCompaniesById(companyId: string): Observable<Company[]> {
    return this.http
      .get(`${this.companiesUrl}?companyId=${companyId}`, { headers: this.headers })
      .map(response => {
        return response as Company[];
      });
  }

}
