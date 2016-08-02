import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class RestangularService {

  private path: string;
  private http: Http;

  constructor(path: string, http: Http) {
    this.path = path;
    this.http = http;
  }

  /*cONSRUCTORTERS DE RUTAS*/
  one(path: string, id: string) {
    return new RestangularService(this.path + path + '/' + id, this.http);
  }

  all(path: string) {
    return new RestangularService(this.path + path, this.http);
  }

  /*hTTP*/
  get(): Observable<Response> {
    return this.http.get(this.path);
  }

  getList(): Observable<Response> {
    return this.http.get(this.path);
  }

  post(obj: any): Observable<Response>{    
    return this.http.post(this.path, obj);
  }

}
