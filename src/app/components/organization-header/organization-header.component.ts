import { Component, OnInit, Input } from '@angular/core';

import { Organization } from '../../services/models/organization';
import { KeycloakService } from '../../keycloak.service';

@Component({
  selector: 'app-organization-header',
  templateUrl: './organization-header.component.html',
  styleUrls: ['./organization-header.component.scss']
})
export class OrganizationHeaderComponent implements OnInit {

  @Input()
  private currentOrganization: Organization;

  @Input()
  private organizations: Array<Organization>;

  username: string;
  authz: any;

  constructor() {
    this.authz = KeycloakService.auth.authz;
    this.username = this.authz.tokenParsed.username;
  }

  ngOnInit() {
  }

  accountManagement() {
    this.authz.accountManagement();
  }

  logout() {
    this.authz.logout();
  }

}
