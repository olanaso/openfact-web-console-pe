import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Restangular } from './restangular';
import { AlertService } from '../alert/alert.service';
import { KeycloakService } from '../keycloak.service';

export const path: string = 'http://localhost:8081/openfact';

@Injectable()
export class RestangularOpenfact extends Restangular {

  private alertService: AlertService;

  constructor(http: Http, alertService: AlertService, private router: Router) {
    super(http);
    this.path = path;
    this.alertService = alertService;
  }

  handleError(error: any): Observable<Response> {
    if (error.status == 401) {      
      KeycloakService.auth.authz.logout();
    } else if (error.status == 403) {
      this.router.navigate(["./forbidden"]);
    } else if (error.status == 404) {
      this.router.navigate(["./notfound"]);
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
    return new RestangularOpenfact(this.http, this.alertService, this.router);
  }

}