import { Injectable } from '@angular/core';
import { OrganizationModel } from '../models/organization-model';
import { RestangularOpenfactService } from './rest/restangular-openfact.service';
import { GenericOpenfactService } from './generic-openfact.service';

@Injectable()
export class OrganizationService extends GenericOpenfactService<OrganizationModel> {

  private static path: string = "/organizations";

  constructor(restangularOpenfactService: RestangularOpenfactService) {
    super(OrganizationService.path, restangularOpenfactService);
  }

  build(): OrganizationModel {
    let model: OrganizationModel = new OrganizationModel(this.getRestangularService());
    return model;
  }

}
