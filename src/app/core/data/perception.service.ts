/**
 * Created by lxpary on 14/12/16.
 */
import {Injectable} from '@angular/core';
import {Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {FileUploader} from 'ng2-file-upload';

import {RestangularOpenfact} from './restangular-openfact';
import {Organization} from '../models/organization.model';
import {Perception} from '../models/perception.model';
import {SearchResults} from '../models/search-results.model';
import {SearchCriteria} from '../models/search-criteria.model';

import {KeycloakHttp} from '../keycloak.http';

export const perceptionIdName: string = 'id';
export const basePath: string = 'sunat';
export const extensionPath: string = 'ubl-extensions';
export const perceptionBasePath: string = 'perceptions';

@Injectable()
export class PerceptionService {

  private restangular: RestangularOpenfact;

  constructor(restangular: RestangularOpenfact) {
    this.restangular = restangular;
  }

  public build(organization: Organization, id?: string): Perception {
    let perception = new Perception();
    perception.id = id;
    perception.restangular = this.restangular.one("organizations", organization.organization).all(basePath).all(extensionPath).one(perceptionBasePath, id);
    return perception;
  }

  public findById(organization: Organization, id: string, queryParams?: URLSearchParams): Observable<Perception> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .one(perceptionBasePath, id)
      .get(queryParams)
      .map(response => {
        let json = <Perception>response.json();
        let result = new Perception();
        result.restangular = restangular.all(basePath).all(extensionPath).one(perceptionBasePath, json[perceptionIdName]);
        result = Object.assign(result, json);
        return result;
      });
  }

  public findByIdAsJson(organization: Organization, id: string, queryParams?: URLSearchParams): Observable<any> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .one(perceptionBasePath, id)
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
      .one(perceptionBasePath, id)
      .all("representation/text")
      .get(queryParams)
      .map(response => {
        return response.text();
      });
  }

  public create(organization: Organization, perception: Perception): Observable<Perception> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(perceptionBasePath)
      .post(perception)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        }
        let json = <Perception>response.json();
        let result = new Perception();
        result.restangular = restangular.all(basePath).all(extensionPath).one(perceptionBasePath, json[perceptionIdName]);
        result = Object.assign(result, json);
        return result;
      });
  }

  public getFileUpload(organization: Organization): FileUploader {
    let restangular = this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(perceptionBasePath)
      .all("upload");
    let upload = new FileUploader({
      url: restangular.path,
      headers: [KeycloakHttp.getToken()]
    });
    return upload;
  }

  public getAll(organization: Organization): Observable<Perception[]> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath).all(extensionPath)
      .all(perceptionBasePath)
      .get()
      .map(response => {
        let json = <Perception[]>response.json();
        let result = new Array<Perception>();
        json.forEach(element => {
          let perception = new Perception();
          perception.restangular = restangular.all(basePath).all(extensionPath).one(perceptionBasePath, element[perceptionIdName]);
          perception = Object.assign(perception, element);
          result.push(perception);
        });
        return result;
      });
  }

  public search(organization: Organization, criteria: SearchCriteria): Observable<SearchResults<Perception>> {
    let restangular = organization.restangular;
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(perceptionBasePath)
      .all("search")
      .post(criteria)
      .map(response => {
        let json = <SearchResults<Perception>>response.json();
        let result = new SearchResults<Perception>();
        let items = new Array<Perception>();

        json.items.forEach(element => {
          let perception = new Perception();
          perception.restangular = restangular.all(basePath).all(extensionPath).one(perceptionBasePath, element[perceptionIdName]);
          perception = Object.assign(perception, element);
          items.push(perception);
        });

        result.items = items;
        result.totalSize = json.totalSize;
        return result;
      });
  }

  public getSendEvents(perception: Perception): Observable<any> {
    return perception.restangular.all('send-events').get().map(response => {
      return response.json()
    });
  }

}
