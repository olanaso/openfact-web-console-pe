import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Restangular} from '../restangular';

@Injectable()
export class SunatService extends Restangular {

  constructor(domainUrl: string, http: Http) {
    super(http, domainUrl);
  }

  public base(path: string): Restangular {
    return new SunatService(path, this.http);
  }

  public one(path: string, id: string): Restangular {
    let copy = new SunatService(this.path + (path ? '/' + path : '') + '/' + id, this.http);
    return copy;
  }

  public all(path: string): Restangular {
    let copy = new SunatService(this.path + '/' + path, this.http);
    return copy;
  }

  public clone(): Restangular {
    return new SunatService(this.path, this.http);
  }

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