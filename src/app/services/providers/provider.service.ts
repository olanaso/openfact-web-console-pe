import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Model } from '../models/model';
import { RestangularService } from './restangular.service';
import { RestangularOpenfactService } from './restangular-openfact.service';

@Injectable()
export abstract class ProviderService<T extends Model>{

  public path: string;
  public idName: string;
  public restangularService: RestangularService;

  constructor(restangularService: RestangularOpenfactService, path: string, idName?: string) {
    this.path = path;
    this.idName = idName || 'id';
    this.restangularService = restangularService;
  }

  abstract build(): T;

  /*Http custome methods*/
  public findById(id: string): Observable<T> {
    let restangularService = this.restangularService.one(this.path, id);
    return restangularService.get()
      .map(this.extractObject)
      .map(model => this.extractSingleData(model, restangularService, false));
  }

  public getAll(): Observable<T[]> {
    let restangularService = this.restangularService.all(this.path);
    return restangularService.get()
      .map(result => result.json())
      .map(models => this.extractMultipleData(models, restangularService));
  }

  public create(t: T): Observable<T> {
    let copy = Object.assign({}, t);
    delete copy['restangular'];

    let restangularService = this.restangularService.all(this.path);
    return restangularService.post(copy)
      .map(this.extractObject)
      .map(model => this.extractSingleData(model, restangularService, true));
  }

  private extractObject(res: Response) {
    if (res.status === 201) {
      return <T>{};
    } else {
      return <T>res.json();
    }
  }

  /*Extract data*/
  private extractSingleData(t: T, restangularService: RestangularService, test: boolean) {
    if (test) {
      t.restangular = restangularService.one('', t[this.idName]);
    } else {
      t.restangular = restangularService;
    }
    return t;
  }

  private extractMultipleData(t: T[], restangularService: RestangularService) {
    t.forEach(element => this.extractSingleData(element, restangularService.clone(), true));
    return t;
  }

}