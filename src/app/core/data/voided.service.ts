/**
 * Created by lxpary on 03/01/17.
 */
import {Injectable} from '@angular/core';
import {Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {FileUploader} from 'ng2-file-upload';

import {RestangularOpenfact} from './restangular-openfact';
import {Organization} from '../models/organization.model';
import {Voided} from '../models/voided.model';
import {SearchResults} from '../models/search-results.model';
import {SearchCriteria} from '../models/search-criteria.model';

import {KeycloakHttp} from '../keycloak.http';

export const voidedIdName: string = 'id';
export const basePath: string = 'sunat';
export const extensionPath: string = 'ubl-extensions';
export const voidedBasePath: string = 'voided-documents';

@Injectable()
export class VoidedService {

  private restangular: RestangularOpenfact;

  constructor(restangular: RestangularOpenfact) {
    this.restangular = restangular;
  }

  public build(organization: Organization, id?: string): Voided {
    let voided = new Voided();
    voided.id = id;
    voided.restangular = this.restangular.one("organizations", organization.organization).all(basePath).all(extensionPath).one(voidedBasePath, id);
    return voided;
  }

  public findById(organization: Organization, id: string, queryParams?: URLSearchParams): Observable<Voided> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .one(voidedBasePath, id)
      .get(queryParams)
      .map(response => {
        let json = <Voided>response.json();
        let result = new Voided();
        result.restangular = restangular.all(basePath).all(extensionPath).one(voidedBasePath, json[voidedIdName]);
        result = Object.assign(result, json);
        return result;
      });
  }

  public findByIdAsJson(organization: Organization, id: string, queryParams?: URLSearchParams): Observable<any> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .one(voidedBasePath, id)
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
      .one(voidedBasePath, id)
      .all("representation/text")
      .get(queryParams)
      .map(response => {
        return response.text();
      });
  }

  public create(organization: Organization, voided: Voided): Observable<Voided> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(voidedBasePath)
      .post(voided)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        }
        return response.json();
        /*if (response.status === 201 || 204) {
         return undefined;
         }
         let json = <Voided>response.json();
         let result = new Voided();
         result.restangular = restangular.all(basePath).all(extensionPath).one(voidedBasePath, json[voidedIdName]);
         result = Object.assign(result, json);
         return result;*/
      });
  }

  public getFileUpload(organization: Organization): FileUploader {
    let restangular = this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(voidedBasePath)
      .all("upload");
    let upload = new FileUploader({
      url: restangular.path,
      headers: [KeycloakHttp.getToken()]
    });
    return upload;
  }

  public getAll(organization: Organization, queryParams?: URLSearchParams): Observable<Voided[]> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath).all(extensionPath)
      .all(voidedBasePath)
      .get(queryParams)
      .map(response => {
        let json = <Voided[]>response.json();
        let result = new Array<Voided>();
        json.forEach(element => {
          let voided = new Voided();
          voided.restangular = restangular.one(voidedBasePath, element[voidedIdName]);
          voided = Object.assign(voided, element);
          result.push(voided);
        });
        return result;
      });
  }


  public search(organization: Organization, criteria: SearchCriteria): Observable<SearchResults<Voided>> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(voidedBasePath)
      .all("search")
      .post(criteria)
      .map(response => {
        let json = <SearchResults<Voided>>response.json();
        let result = new SearchResults<Voided>();
        let items = new Array<Voided>();

        json.items.forEach(element => {
          let voided = new Voided();
          voided.restangular = restangular.all(basePath).all(extensionPath).one(voidedBasePath, element[voidedIdName]);
          voided = Object.assign(voided, element);
          items.push(voided);
        });

        result.items = items;
        result.totalSize = json.totalSize;
        return result;
      });
  }

  public getSendEvents(voided: Voided): Observable<any> {
    return voided.restangular.all('send-events').get().map(response => {
      return response.json()
    });
  }

}
