import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class RestangularService {

  private path: string;
  private http: Http;

  constructor(path: string, http: Http) {
    this.path = path;
    this.http = http;
  }

  /*Contructor de rutas*/
  one(path: string, id: string) {
    return new RestangularService(this.path + path + '/' + id, this.http);
  }

  all(path: string) {
    return new RestangularService(this.path + path, this.http);
  }

  /*Metodos http*/
  get(): Observable<Response> {
    return this.http.get(this.path);
  }

  post(obj: any): Observable<Response> {
    return this.http.post(this.path, obj);
  }

  put(obj: any): Observable<Response> {
    return this.http.put(this.path, obj);
  }

  delete(): Observable<Response> {
    return this.http.delete(this.path);
  }

}
