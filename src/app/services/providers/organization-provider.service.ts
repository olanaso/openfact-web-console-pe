import { Injectable } from '@angular/core';
import { OrganizationModel } from '../models/organization-model';
import { RestangularOpenfactService } from './restangular-openfact.service';
import { ProviderService } from './provider.service';

@Injectable()
export class OrganizationProviderService extends ProviderService<OrganizationModel>{

  private static idName: string = 'name';
  private static resourcePath: string = 'organizations';

  constructor(restangularService: RestangularOpenfactService) {
    super(restangularService, OrganizationProviderService.resourcePath, OrganizationProviderService.idName);
  }

  build(): OrganizationModel {
    let model: OrganizationModel = new OrganizationModel(this.restangularService);
    return model;
  }

}