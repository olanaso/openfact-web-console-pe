import { Injectable } from '@angular/core';
import { OrganizationModel } from '../models/organization-model';

@Injectable()
export class OrganizationService {

  organizations: OrganizationModel[];

  constructor() {   
    this.organizations = [
      new OrganizationModel('master0', 'descripcion 01'),
      new OrganizationModel('master1', 'descripcion 02'),
      new OrganizationModel('master2', 'descripcion 03')
    ];
  }

  getAll() {
    return Promise.resolve(this.organizations);
  }

}
