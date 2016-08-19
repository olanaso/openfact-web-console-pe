import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response, RequestOptionsArgs, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/catch';

export abstract class Restangular {

  protected http: Http;
  public path: string;

  public constructor(http: Http, path: string) {
    this.http = http;
    this.path = path;
  }

  /*path builder*/
  public abstract base(path: string): Restangular;
  public abstract one(path: string, id: any): Restangular;
  public abstract all(path: string): Restangular;

  public abstract clone(): Restangular;

  /*http methods*/
  public get(queryParams?: URLSearchParams): Observable<Response> {
    let options = { search: queryParams };
    return this.http.get(this.path, options).catch(this.handleError);
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

  /*handler error*/
  protected abstract handleError(error: Response): Observable<Response>;

}