import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { KeycloakService } from './keycloak.service';
import { KeycloakIdentityService } from './keycloak-identity.service';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';

@Injectable()
export class KeycloakInterceptor implements HttpInterceptor {

  constructor(
    private keycloakService: KeycloakService,
    private keycloakIdentityService: KeycloakIdentityService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.keycloakService.authenticated()) { return next.handle(request); }

    const tokenPromise: Promise<string> = this.keycloakService.getToken();
    const tokenObservable: Observable<string> = Observable.fromPromise(tokenPromise);

    return tokenObservable.map((token) => {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return request;
    }).concatMap((newRequest) => {
      return next.handle(newRequest)
        .do(
          (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // do stuff with response if you want
            }
          },
          (err: any) => {
            if (err instanceof HttpErrorResponse) {
              // if (err.status === 403 || err.status === 401) {
              //   this.keycloakService.login();
              // }

              if (err.url.indexOf('/authorize') === -1) {

                const rptPromise: Promise<string> = this.keycloakIdentityService.authorize((err.headers.get('WWW-Authenticate')));
                const rptObservable: Observable<string> = Observable.fromPromise(rptPromise);

                rptObservable.subscribe((val) => {
                  console.log("rpt result", val);
                });

              }
            }
          }
        );
    });

  }
}

export const KEYCLOAK_HTTP_INTERCEPTOR = {
  provide: HTTP_INTERCEPTORS,
  useClass: KeycloakInterceptor,
  multi: true
};
