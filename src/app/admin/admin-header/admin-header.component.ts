import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../../keycloak.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

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
