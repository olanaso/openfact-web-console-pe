import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class Restangular {

    public path: string;
    public http: Http;

    public constructor(http: Http) {
        this.http = http;
    }

    /*path builder*/
    public one(path: string, id: string): Restangular {
        let restangular = this.clone();
        restangular.path = this.path + (path ? '/' + path : '') + '/' + id;
        return restangular;
    }

    public all(path: string): Restangular {
        let restangular = this.clone();
        restangular.path = this.path + '/' + path;
        return restangular;
    }

    /*http methods*/
    public get(queryParams?: URLSearchParams, options?: RequestOptionsArgs): Observable<Response> {
        let requestOptionsArgs;
        if (queryParams || options) {
            requestOptionsArgs = {
                headers: new Headers()
            };

            if (queryParams) {
                requestOptionsArgs.search = queryParams
            }
            if (options) {
                requestOptionsArgs = Object.assign(requestOptionsArgs, options);
            }
        }

        return this.http.get(this.path, requestOptionsArgs).catch((error) => {
            return this.handleError(error);
        });
    }

    public post(obj?: any): Observable<Response> {
        return this.http.post(this.path, obj).catch((error) => {
            return this.handleError(error);
        });
    }

    public put(obj: any): Observable<Response> {
        let clone = Object.assign({}, obj);
        delete clone['restangular'];

        return this.http.put(this.path, clone).catch((error) => {
            return this.handleError(error);
        });
    }

    public delete(): Observable<Response> {
        return this.http.delete(this.path).catch((error) => {
            return this.handleError(error);
        });
    }

    /*handler error*/
    protected handleError(error: any): Observable<Response> {
        let serverMessage;
        try {
            serverMessage = error.json();
        } catch (error) {
            console.log('Server did not send error message');
        }

        let errMsg;
        if (serverMessage != null) {
            errMsg = serverMessage.errorMessage;
        } else {
            errMsg = (error.message) ? error.message : error.status ? `${error._body.errorMessage}` : 'Server error' + `- ${error.status} - ${error.statusText}`;
        }

        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    protected clone(): Restangular {
        return new Restangular(this.http);
    }

}
