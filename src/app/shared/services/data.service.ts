import { Injectable } from '@angular/core';

import { OrganizationService } from './organization.service';

@Injectable()
export class DataService {

  constructor(
    private organization: OrganizationService) {
  }

  public organizations(): OrganizationService {
    return this.organization;
  }

}
