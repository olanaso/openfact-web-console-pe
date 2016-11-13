import { Component, OnInit } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';

import { KeycloakService } from '../../keycloak.service';

@Component({
  selector: 'app-unauthorized-401',
  templateUrl: './unauthorized-401.component.html',
  styleUrls: ['./unauthorized-401.component.scss']
})
export class Unauthorized401Component implements OnInit {

  constructor(routerState: RouterStateSnapshot) { }

  ngOnInit() {
  }

  logout() {
    KeycloakService.auth.logout({
      redirectUri: '/'
    });
  }

}
