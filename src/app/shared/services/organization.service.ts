import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RestangularOpenfact } from './restangular-openfact';
import { Organization } from '../models';
import { SearchResults, SearchCriteria } from '../models';

export const ORGANIZATION_ID_NAME: string = 'name';
export const ORGANIZATION_BASE_PATH: string = 'organizations';

@Injectable()
export class OrganizationService {

  private restangular: RestangularOpenfact;

  constructor(restangular: RestangularOpenfact) {
    this.restangular = restangular;
  }

  public findById(id: string): Observable<Organization> {
    return this.restangular
      .one(ORGANIZATION_BASE_PATH, id)
      .get()
      .map(response => {
        let json = <Organization>response.json();
        let result = new Organization();
        result.restangular = this.restangular.one('', json[ORGANIZATION_ID_NAME]);
        result = Object.assign(result, json);
        return result;
      });
  }  

  public create(organization: Organization): Observable<Organization> {
    return this.restangular
      .all(ORGANIZATION_BASE_PATH)
      .post(organization)
      .map(response => {
        if (response.status === 201) {
          return undefined;
        }
        let json = <Organization>response.json();
        let result = new Organization();
        result.restangular = this.restangular.one('', json[ORGANIZATION_ID_NAME]);
        result = Object.assign(result, json);
        return result;
      });
  }

  public getAll(): Observable<Organization[]> {
    return this.restangular
      .all(ORGANIZATION_BASE_PATH)
      .get()
      .map(response => {
        let json = <Organization[]>response.json();
        let result = new Array<Organization>();
        json.forEach(element => {
          let organization = new Organization();
          organization.restangular = this.restangular.one('', element[ORGANIZATION_ID_NAME]);
          organization = Object.assign(organization, element);
          result.push(organization);
        });
        return result;
      });
  }

  public search(criteria: SearchCriteria): Observable<SearchResults<Organization>> {
    return this.restangular
      .all(ORGANIZATION_BASE_PATH)
      .all("search")
      .post(criteria)
      .map(response => {
        let json = <SearchResults<Organization>>response.json();
        let result = new SearchResults<Organization>();        
        let items = new Array<Organization>();
              
        json.items.forEach(element => {
          let organization = new Organization();
          organization.restangular = this.restangular.one('', element[ORGANIZATION_ID_NAME]);
          organization = Object.assign(organization, element);
          items.push(organization);
        });

        result.items = items;
        result.totalSize = json.totalSize;
        return result;
      });
  }

}