import { ConnectionBackend, Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from '@angular/http';

import { Injectable } from '@angular/core';
import { KeycloakOAuthService } from './keycloak.oauth.service';
import { LoadingService } from '../core/loading/loading.service';
import { Observable } from 'rxjs/Rx';

export class KeycloakHttp extends Http {

    public static getToken() {
        return {
            name: 'Authorization',
            value: 'Bearer ' + KeycloakOAuthService.auth.authz.token
        };
    }

    constructor(
        _backend: ConnectionBackend,
        _defaultOptions: RequestOptions,
        private _keycloakService: KeycloakOAuthService,
        private _loadingService: LoadingService
    ) {
        super(_backend, _defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        const tokenPromise: Promise<string> = this._keycloakService.getToken();
        const tokenObservable: Observable<string> = Observable.fromPromise(tokenPromise);

        if (typeof url === 'string') {
            return tokenObservable.map(token => {
                const authOptions = new RequestOptions({ headers: new Headers({ 'Authorization': 'Bearer ' + token }) });
                return new RequestOptions().merge(options).merge(authOptions);
            }).concatMap(opts => super.request(url, opts));
        } else if (url instanceof Request) {
            return tokenObservable.map(token => {
                url.headers.set('Authorization', 'Bearer ' + token);
                return url;
            }).concatMap(request => super.request(request));
        }
    }
}

export function keycloakHttpFactory(
    backend: XHRBackend,
    defaultOptions: RequestOptions,
    keycloakService: KeycloakOAuthService,
    loadingService: LoadingService
) {
    return new KeycloakHttp(backend, defaultOptions, keycloakService, loadingService);
}

export const KEYCLOAK_HTTP_PROVIDER = {
    provide: Http,
    useFactory: keycloakHttpFactory,
    deps: [XHRBackend, RequestOptions, KeycloakOAuthService, LoadingService]
};
