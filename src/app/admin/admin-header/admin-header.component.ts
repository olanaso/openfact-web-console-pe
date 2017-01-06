import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../../core/keycloak.service';

@Component({
  selector: 'of-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  username: string;
  authz: any;

  constructor() { }

  ngOnInit() {
    this.authz = KeycloakService.auth.authz;
    this.username = KeycloakService.auth.authz.tokenParsed.username;
  }

  accountManagement() {
    this.authz.accountManagement();
  }

  logout() {
    this.authz.logout();
  }

}
