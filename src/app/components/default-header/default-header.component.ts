import { Component, OnInit } from '@angular/core';

import { KeycloakService } from '../../keycloak.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent implements OnInit {

  username: string;
  auth: any;

  constructor() {
    this.username = KeycloakService.auth.claims.name;
    this.auth = KeycloakService.auth;
  }

  ngOnInit() {
  }

  accountManagement() {
    this.auth.accountManagement();
  }

  logout() {
    this.auth.logout();
  }

}
