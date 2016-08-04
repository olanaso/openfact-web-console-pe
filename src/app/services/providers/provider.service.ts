import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Model } from '../models/model';
import { RestangularOpenfactService } from './restangular-openfact.service';

@Injectable()
export abstract class ProviderService<T extends Model>{

  private path: string;
  private restangular: RestangularOpenfactService;

  constructor(path: string, restangularOpenfactService: RestangularOpenfactService) {
    this.path = path;
    this.restangular = restangularOpenfactService;
  }

  abstract build(): T;

  /*Return the absolute url of the current object*/
  getPath(): string {
    return this.path;
  }

  /*Return the reference to the RestangularOpenfactService object*/
  getRestangularService(): RestangularOpenfactService {
    return this.restangular;
  }

  /*Http custome methods*/
  findById(id: string): Observable<T> {
    return this.restangular
      .one(this.path, id)
      .get()
      .map(this.extractObject)
      .map(model => this.extractSingleData(model))
      .catch(this.handleError);
  }

  getAll(): Observable<T[]> {
    return this.restangular
      .all(this.path)
      .get()
      .map(result => result.json())
      .map(models => this.extractMultipleData(models))
      .catch(this.handleError);
  }

  create(t: T): Observable<T> {
    let copy = Object.assign({}, t);
    delete copy['restangular'];
    return this.restangular
      .all(this.path)
      .post(copy)
      .map(this.extractObject)
      .map(model => this.extractSingleData(model))
      .catch(this.handleError);
  }

  private extractObject(res: Response) {
    if (res.status === 201) {
      return <T>{};
    } else {
      return <T>res.json();
    }
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
      errMsg = (error.message) ? error.message : error.status ? serverMessage.errorMessage : 'Server error' + `- ${error.status} - ${error.statusText}`;
    } else {
      errMsg = (error.message) ? error.message : error.status ? `${error._body.errorMessage}` : 'Server error' + `- ${error.status} - ${error.statusText}`;
    }

    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  /*Extract data*/
  private extractSingleData(t: T) {
    t.restangular = this.restangular;
    return t;
  }

  private extractMultipleData(t: T[]) {
    t.forEach(element => this.extractSingleData(element));
    return t;
  }

}