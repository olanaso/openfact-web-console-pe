import { Injectable } from '@angular/core';
import { OrganizationModel } from '../models/organization-model';
import { RestangularOpenfactService } from './restangular-openfact.service';
import { ProviderService } from './provider.service';

@Injectable()
export class OrganizationProviderService extends ProviderService<OrganizationModel>{

  private static path: string = '/organizations';

  constructor(restangularOpenfactService: RestangularOpenfactService) {
    super(OrganizationProviderService.path, restangularOpenfactService);
  }

  build(): OrganizationModel {
    let model: OrganizationModel = new OrganizationModel(this.getRestangularService());
    return model;
  }

}