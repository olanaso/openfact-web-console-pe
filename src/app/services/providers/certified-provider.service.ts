/**
 * Created by AHREN on 10/08/2016.
 */
import { Injectable } from '@angular/core';
import { CertifiedModel } from '../models/certified-model';
import { RestangularOpenfactService } from './restangular-openfact.service';
import { ProviderService } from './provider.service';

@Injectable()
export class CertifiedProviderService extends ProviderService<CertifiedModel>{

  private static idName: string = 'name';
  private static resourcePath: string = 'certifieds';

  constructor(restangularService: RestangularOpenfactService) {
    super(restangularService, CertifiedProviderService.resourcePath, CertifiedProviderService.idName);
  }

  build(): CertifiedModel {
    let model: CertifiedModel = new CertifiedModel(this.restangularService);
    return model;
  }

}
