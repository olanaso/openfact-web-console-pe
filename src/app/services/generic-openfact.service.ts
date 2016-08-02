import { Injectable } from '@angular/core';
import { RestangularOpenfactService } from './rest/restangular-openfact.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Model } from '../models/model';

@Injectable()
export abstract class GenericOpenfactService<T extends Model> {

  private path: string;
  private restangular: RestangularOpenfactService;

  constructor(path: string, restangularOpenfactService: RestangularOpenfactService) {
    this.path = path;
    this.restangular = restangularOpenfactService;
  }

  create(t: T) {        
    return this.restangular.all(this.path).post(t);
  }

  findById(id: string): Observable<T> {
    return this.restangular.one(this.path, id).get()
      .map(this.extractData);
    //.catch(this.handleErrorObs);
  }

  getAll(): Observable<T[]> {
    return this.restangular.all(this.path).getList()
      .map(response=>this.extraerDatos(response.json()));
    //.catch(this.handleErrorObs);
  }

private extraerDatos(algo:any){  
  return algo.extractData;
}

  private extractData(res: Response) {
    let body;
    if (res.text()) {
      body = res.json();
    }    
    body.algo = function name(params:any) {
      console.log('sdfsdf');
    }
    return body || {};
  }

  private handleErrorObs(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
