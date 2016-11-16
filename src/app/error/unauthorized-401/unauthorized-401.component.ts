import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../../core/keycloak.service';

@Component({
  selector: 'of-unauthorized-401',
  templateUrl: './unauthorized-401.component.html',
  styleUrls: ['./unauthorized-401.component.scss']
})
export class Unauthorized401Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout() {
    KeycloakService.auth.logout();
  }

}
