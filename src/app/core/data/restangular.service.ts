import { AlertService } from './../alert/alert.service';
import { ConfigService } from './../../config.service';
import { Headers } from '@angular/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { KeycloakOAuthService } from '../../keycloak/keycloak.oauth.service';
import { Observable } from 'rxjs/Rx';
import { RequestOptionsArgs } from '@angular/http';
import { Response } from '@angular/http';
import { RestangularBasePath } from './restangular-base-path';
import { Router } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { ToastsManager } from 'ng2-toastr';

export function RestangularServiceFactory(http: Http, router: Router, toastr: ToastsManager, config: ConfigService) {
  return new RestangularService(http, router, toastr, {url: config.getSettings().apiEndpoint});
}

@Injectable()
export class RestangularService {

  private _path: string;

  constructor(private _http: Http,
              private router: Router,
              private toastr: ToastsManager,
              basePath: RestangularBasePath) {
    this._path = basePath.url;
  }

  get path() {
    return this._path;
  }

  get http() {
    return this._http;
  }

  one(path: string, id: string): RestangularService {
    const restangular = this.clone();
    restangular._path += (path ? '/' + path : '') + '/' + id;
    return restangular;
  }

  all(path: string): RestangularService {
    const restangular = this.clone();
    restangular._path = restangular._path + '/' + path;
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

    return this._http.get(this._path, requestOptionsArgs).catch((error) => {
      return this.handleError(error);
    });
  }

  post(obj?: any): Observable<Response> {
    return this._http.post(this._path, obj).catch((error) => {
      return this.handleError(error);
    });
  }

  put(obj: any): Observable<Response> {
    const clone = Object.assign({}, obj);
    delete clone['_restangular'];

    return this._http.put(this._path, clone).catch((error) => {
      return this.handleError(error);
    });
  }

  delete(): Observable<Response> {
    return this._http.delete(this._path).catch((error) => {
      return this.handleError(error);
    });
  }

  clone(): RestangularService {
    return new RestangularService(this._http, this.router, this.toastr, {url: this._path});
  }

  handleError(error: any): Observable<Response> {
    if (error.status === 401) {
      KeycloakOAuthService.auth.authz.logout();
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
        this.toastr.error('Error! ' + data['errorMessage']);
      } else {
        this.toastr.error('Error! An unexpected server error has occurred');
      }
    }
    return Observable.throw(error);
  }

}
