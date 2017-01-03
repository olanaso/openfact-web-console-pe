/**
 * Created by lxpary on 14/12/16.
 */
import {Injectable} from '@angular/core';
import {Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {FileUploader} from 'ng2-file-upload';

import {RestangularOpenfact} from './restangular-openfact';
import {Organization} from '../models/organization.model';
import {Retention} from '../models/retention.model';
import {SearchResults} from '../models/search-results.model';
import {SearchCriteria} from '../models/search-criteria.model';

import {KeycloakHttp} from '../keycloak.http';

export const retentionIdName: string = 'id';
export const basePath: string = 'sunat';
export const extensionPath: string = 'ubl-extensions';
export const retentionBasePath: string = 'retentions';

@Injectable()
export class RetentionService {

  private restangular: RestangularOpenfact;

  constructor(restangular: RestangularOpenfact) {
    this.restangular = restangular;
  }

  public build(organization: Organization, id?: string): Retention {
    let retention = new Retention();
    retention.id = id;
    retention.restangular = this.restangular.one("organizations", organization.organization).all(basePath).all(extensionPath).one(retentionBasePath, id);
    return retention;
  }

  public findById(organization: Organization, id: string, queryParams?: URLSearchParams): Observable<Retention> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .one(retentionBasePath, id)
      .get(queryParams)
      .map(response => {
        let json = <Retention>response.json();
        let result = new Retention();
        result.restangular = restangular.all(basePath).all(extensionPath).one(retentionBasePath, json[retentionIdName]);
        result = Object.assign(result, json);
        return result;
      });
  }

  public findByIdAsJson(organization: Organization, id: string, queryParams?: URLSearchParams): Observable<any> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .one(retentionBasePath, id)
      .all("representation/json")
      .get(queryParams)
      .map(response => {
        return response.json();
      });
  }

  public findByIdAsText(organization: Organization, id: string, queryParams?: URLSearchParams): Observable<string> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .one(retentionBasePath, id)
      .all("representation/text")
      .get(queryParams)
      .map(response => {
        return response.text();
      });
  }

  public create(organization: Organization, retention: Retention): Observable<Retention> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(retentionBasePath)
      .post(retention)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        }
        return response.json();
        /*if (response.status === 201 || 204) {
          return undefined;
        }
        let json = <Retention>response.json();
        let result = new Retention();
        result.restangular = restangular.all(basePath).all(extensionPath).one(retentionBasePath, json[retentionIdName]);
        result = Object.assign(result, json);
        return result;*/
      });
  }

  public getFileUpload(organization: Organization): FileUploader {
    let restangular = this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(retentionBasePath)
      .all("upload");
    let upload = new FileUploader({
      url: restangular.path,
      headers: [KeycloakHttp.getToken()]
    });
    return upload;
  }

  public getAll(organization: Organization, queryParams?: URLSearchParams): Observable<Retention[]> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath).all(extensionPath)
      .all(retentionBasePath)
      .get(queryParams)
      .map(response => {
        let json = <Retention[]>response.json();
        let result = new Array<Retention>();
        json.forEach(element => {
          let retention = new Retention();
          retention.restangular = restangular.one(retentionBasePath, element[retentionIdName]);
          retention = Object.assign(retention, element);
          result.push(retention);
        });
        return result;
      });
  }


  public search(organization: Organization, criteria: SearchCriteria): Observable<SearchResults<Retention>> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(retentionBasePath)
      .all("search")
      .post(criteria)
      .map(response => {
        let json = <SearchResults<Retention>>response.json();
        let result = new SearchResults<Retention>();
        let items = new Array<Retention>();

        json.items.forEach(element => {
          let retention = new Retention();
          retention.restangular = restangular.all(basePath).all(extensionPath).one(retentionBasePath, element[retentionIdName]);
          retention = Object.assign(retention, element);
          items.push(retention);
        });

        result.items = items;
        result.totalSize = json.totalSize;
        return result;
      });
  }

  public getSendEvents(retention: Retention): Observable<any> {
    return retention.restangular.all('send-events').get().map(response => {
      return response.json()
    });
  }

}
