import { Injectable } from '@angular/core';
import { OrganizationService } from './organization.service';
import { ServerInfoService } from './server-info.service';

@Injectable()
export class DataService {

  constructor(
    private organizationService: OrganizationService,
    private serverInfoService: ServerInfoService) { }

  organizations() {
    return this.organizationService;
  }

  serverInfo() {
    return this.serverInfoService;
  }

}
