import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Restangular } from './restangular';
import { AlertService } from '../alert/alert.service';

export const path: string = 'http://localhost:8081/openfact';

@Injectable()
export class RestangularOpenfact extends Restangular {

  private alertService: AlertService;

  constructor(http: Http, alertService: AlertService) {
    super(http);
    this.path = path;
    this.alertService = alertService;
  }

  handleError(error: any): Observable<Response> {
    if (error.status == 401) {
      //Auth.authz.logout();
      console.log("Auth error");
    } else if (error.status == 403) {
      //$location.path('/forbidden');
      console.log("forbidden");
    } else if (error.status == 404) {
      //$location.path('/notfound');
      console.log("not found");
    } else if (error.status) {
      let data: Response = (<Response>error).json();
      if (data && data["errorMessage"]) {
        this.alertService.popAsync('error', 'Error', data["errorMessage"]);
      } else {
        this.alertService.popAsync('error', 'Error', "An unexpected server error has occurred");
      }
    }
    return Observable.throw(error);
  }

  clone(): Restangular {
    return new RestangularOpenfact(this.http, this.alertService);
  }

}