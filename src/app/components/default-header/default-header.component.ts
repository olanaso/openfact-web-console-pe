import { Component, OnInit } from '@angular/core';

import { KeycloakService } from '../../keycloak.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent implements OnInit {

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
