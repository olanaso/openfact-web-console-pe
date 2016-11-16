import { Component, OnInit, Input } from '@angular/core';

import { KeycloakService } from '../../core/keycloak.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'of-organization-header',
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
