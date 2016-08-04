import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Model } from '../models/model';
import { RestangularOpenfactService } from './rest/restangular-openfact.service';

@Injectable()
export abstract class GenericOpenfactService<T extends Model> {

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
  setPath(path: string) {
    this.path = path;
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
      .map(result => <T>result.json())
      .map(model => this.extractSingleData(model));
  }

  getAll(): Observable<T[]> {
    return this.restangular
      .all(this.path)
      .get()
      .map(result => <T[]>result.json())
      .map(models => this.extractMultipleData(models));
  }

  create(t: T): Observable<T> {
    let copy = Object.assign({}, t);
    delete copy['restangular'];
    return this.restangular
      .all(this.path)
      .post(copy)
      .map(result => <T>result.json())
      .map(model => this.extractSingleData(model));
  }

  /*Extract data*/
  extractSingleData(t: T) {
    t.restangular = this.restangular;
    return t;
  }

  extractMultipleData(t: T[]) {
    t.forEach(element => this.extractSingleData(element));
    return t;
  }

}
