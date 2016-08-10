import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { Provider } from './provider';
import { CertifiedModel } from '../models/certified-model';

import { Restangular } from '../restangular/restangular';
import { OpenfactService } from '../restangular-impl/openfact.service';

export const ID: string = 'name';
export const PATH: string = 'organizations';

@Injectable()
export class CertifiedProviderService implements Provider {

  public path: string = PATH;

  private id: string = ID;
  private restangular: Restangular;

  constructor(restangular: OpenfactService) {
    this.restangular = restangular;
  }

  build(): CertifiedModel {
    let model: CertifiedModel = new CertifiedModel(this.restangular);
    return model;
  }

}
