import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export abstract class RestangularService {

  protected http: Http;
  public path: string;

  public constructor(http: Http, path: string) {
    this.http = http;
  }

  getPath() {
    //this.path = path;
    return this.path;
  }
  /*Contructor de rutas*/

  /*path builder*/




  public abstract clone(): RestangularService;

  public one(path: string, id: string): RestangularService {
    let restangular = this.clone();
    restangular.path = this.path + (path ? '/' + path : '') + '/' + id;
    return restangular;

  }

  public all(path: string): RestangularService {
    let restangular = this.clone();
    restangular.path = this.path + '/' + path;
    return restangular;
  }

  /*http methods*/
  public get(): Observable<Response> {
    return this.http.get(this.path).catch(this.handleError);
  }

  public post(obj: any): Observable<Response> {
    return this.http.post(this.path, obj).catch(this.handleError);
  }

  public put(obj: any): Observable<Response> {
    return this.http.put(this.path, obj).catch(this.handleError);
  }

  public delete(): Observable<Response> {
    return this.http.delete(this.path).catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
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
