import { Injectable } from '@angular/core';
import { OrganizationService } from './organization.service';

@Injectable()
export class DataService {

  constructor(private organizationService: OrganizationService) { }

  organizations() {
    return this.organizationService;
  }

}
