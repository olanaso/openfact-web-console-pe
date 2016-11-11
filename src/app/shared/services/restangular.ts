import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, URLSearchParams } from '@angular/http';
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
        let restangular = new Restangular(this.http);
        restangular.path = this.path + (path ? '/' + path : '') + '/' + id;
        return restangular;
    }

    public all(path: string): Restangular {
        let restangular = new Restangular(this.http);
        restangular.path = this.path + '/' + path;
        return restangular;
    }

    /*http methods*/
    public get(queryParams?: URLSearchParams): Observable<Response> {
        let options;
        if (queryParams) {
            options = { search: queryParams };
        }
        return this.http.get(this.path, options).catch(this.handleError);
    }

    public post(obj: any): Observable<Response> {
        return this.http.post(this.path, obj).catch(this.handleError);
    }

    public put(obj: any): Observable<Response> {
        let clone = Object.assign({}, obj);
        delete clone['restangular'];
        return this.http.put(this.path, clone).catch(this.handleError);
    }

    public delete(): Observable<Response> {
        return this.http.delete(this.path).catch(this.handleError);
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

}
