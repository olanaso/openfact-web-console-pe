/**
 * Created by AHREN on 10/08/2016.
 */
import { Injectable } from '@angular/core';
import { CertifiedModel } from './models/certified-model';
import { RestangularOpenfactService } from './providers/restangular-openfact.service';
import { GenericOpenfactService } from './generic-openfact.service';

@Injectable()
export class CertifiedService extends GenericOpenfactService<CertifiedModel>{

  private static path: string = "/certifieds";

  constructor(restangularOpenfactService: RestangularOpenfactService) {
    super(CertifiedService.path, restangularOpenfactService);
  }

  build(): CertifiedModel {
    let model: CertifiedModel = new CertifiedModel(this.getRestangularService());
    return model;
  }

}
