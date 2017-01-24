import { AlertService } from './../alert/alert.service';
import { BASE_URL } from '../../app.module';
import { Headers } from '@angular/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from './../keycloak.service';
import { Observable } from 'rxjs/Rx';
import { RequestOptionsArgs } from '@angular/http';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { URLSearchParams } from '@angular/http';

export function RestangularServiceFactory(http: Http, router: Router, alertService: AlertService) {
  return new RestangularService(http, router, alertService, { url: BASE_URL });
}

export interface RestangularBasePath {
  url: string;
}

@Injectable()
export class RestangularService {

  private path: string;

  constructor(
    private http: Http,
    private router: Router,
    private alertService: AlertService,
    basePath: RestangularBasePath) {
    this.path = basePath.url;
  }

  one(path: string, id: string): RestangularService {
    const restangular = this.clone();
    restangular.path += (path ? '/' + path : '') + '/' + id;
    return restangular;
  }

  all(path: string): RestangularService {
    const restangular = this.clone();
    restangular.path = restangular.path + '/' + path;
    return restangular;
  }

  /*http methods*/
  get(queryParams?: URLSearchParams, options?: RequestOptionsArgs): Observable<Response> {
    let requestOptionsArgs;
    if (queryParams || options) {
      requestOptionsArgs = {
        headers: new Headers()
      };

      if (queryParams) {
        requestOptionsArgs.search = queryParams;
      }
      if (options) {
        requestOptionsArgs = Object.assign(requestOptionsArgs, options);
      }
    }

    return this.http.get(this.path, requestOptionsArgs).catch((error) => {
      return this.handleError(error);
    });
  }

  post(obj?: any): Observable<Response> {
    return this.http.post(this.path, obj).catch((error) => {
      return this.handleError(error);
    });
  }

  put(obj: any): Observable<Response> {
    const clone = Object.assign({}, obj);
    delete clone['_restangular'];

    return this.http.put(this.path, clone).catch((error) => {
      return this.handleError(error);
    });
  }

  delete(): Observable<Response> {
    return this.http.delete(this.path).catch((error) => {
      return this.handleError(error);
    });
  }

  clone(): RestangularService {
    return new RestangularService(this.http, this.router, this.alertService, { url: this.path });
  }

  handleError(error: any): Observable<Response> {
    if (error.status === 401) {
      KeycloakService.auth.authz.logout();
    } else if (error.status === 403) {
      this.router.navigate(['./forbidden']);
    } else if (error.status === 404) {
      this.router.navigate(['./not-found']);
    } else if (error.status) {
      let data: Response;
      try {
        data = (<Response>error).json();
      } catch (err) {
        console.log(err);
      }

      if (data && data['errorMessage']) {
        this.alertService.popAsync('error', 'Error', data['errorMessage']);
      } else {
        this.alertService.popAsync('error', 'Error', 'An unexpected server error has occurred');
      }
    }
    return Observable.throw(error);
  }

}
