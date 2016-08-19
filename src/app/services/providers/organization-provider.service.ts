import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { Provider } from './provider';
import { OrganizationModel } from '../models';

import { Restangular } from '../restangular';
import { OpenfactService } from '../restangular-impl'

import { ResponseToModel, ObjectBuilder } from '../utils';

export const ORGANIZATION_ID: string = 'name';
export const ORGANIZATION_PATH: string = 'organizations';

@Injectable()
export class OrganizationProviderService implements Provider {

  public path: string = ORGANIZATION_PATH;

  private id: string = ORGANIZATION_ID;
  private restangular: Restangular;

  constructor(restangular: OpenfactService) {
    this.restangular = restangular;
  }

  public findById(id: string): Observable<OrganizationModel> {
    let restangular = this.restangular.one(this.path, id);
    return restangular.get()
      .map(result => ResponseToModel.toModel<OrganizationModel>(result, restangular, new ObjectBuilder<OrganizationModel>(OrganizationModel)));
  }

  public getAll(): Observable<OrganizationModel[]> {
    let restangular = this.restangular.all(this.path);
    return restangular.get()
      .map(result => ResponseToModel.toModels<OrganizationModel>(result, restangular, new ObjectBuilder<OrganizationModel>(OrganizationModel), true));
  }

  public create(organization: OrganizationModel): Observable<OrganizationModel> {
    let restangular = this.restangular.all(this.path);
    return restangular.post(organization.copy())
      .map(result => ResponseToModel.toModel<OrganizationModel>(result, restangular, new ObjectBuilder<OrganizationModel>(OrganizationModel), true));
  }

}