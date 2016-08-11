import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { Provider } from './provider';
import { OrganizationModel } from '../models';

import { Restangular } from '../restangular';
import { OpenfactService } from '../restangular-impl';

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

  public build(): OrganizationModel {
    return new OrganizationModel(this.restangular);
  }

  public findById(id: string): Observable<OrganizationModel> {
    let restangular = this.restangular.one(this.path, id);
    return restangular.get()
      .map(result => this.extractObject(result, restangular))
      .map(model => this.extractSingleData(model, restangular, false));
  }

  public getAll(): Observable<OrganizationModel[]> {
    let restangular = this.restangular.all(this.path);
    return restangular.get()
      .map(result => result.json())
      .map(models => this.extractMultipleData(models, restangular));
  }

  public create(organization: OrganizationModel): Observable<OrganizationModel> {
    let copy = organization.clone();

    let restangular = this.restangular.all(this.path);
    return restangular.post(copy)
      .map(result => this.extractObject(result, restangular))
      .map(model => this.extractSingleData(model, restangular, true));
  }

  protected extractObject(res: Response, restangular: Restangular) {
    let obj = new OrganizationModel(restangular);
    if (res.status === 201) {
      return obj;
    } else {
      let response = <OrganizationModel>res.json();
      return Object.assign(obj, response);
    }
  }

  /*Extract data*/
  protected extractSingleData(organization: OrganizationModel, restangular: Restangular, requireOne: boolean) {
    if (requireOne) {
      organization.restangular = restangular.one('', organization[this.id]);
    }
    return organization;
  }

  protected extractMultipleData(organizations: OrganizationModel[], restangular: Restangular) {
    for (let i = 0; i < organizations.length; i++) {
      let obj = new OrganizationModel(restangular);
      organizations[i] = Object.assign(obj, organizations[i]);
      this.extractSingleData(organizations[i], restangular, true)
    }
    return organizations;
  }

}