import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService, User } from './../../ngx-login-client';
import { KeycloakService } from './../../keycloak-service/keycloak.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'of-horizontal-navigation',
  templateUrl: './horizontal-navigation.component.html',
  styleUrls: ['./horizontal-navigation.component.scss']
})
export class HorizontalNavigationComponent implements OnInit, OnDestroy {

  loggedInUser: User;
  private subcriptions: Subscription[] = [];

  constructor(
    private userService: UserService,
    private keycloakService: KeycloakService,
  ) {
    this.subcriptions.push(
      userService.loggedInUser.subscribe((val) => this.loggedInUser = val)
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subcriptions.forEach((val) => val.unsubscribe());
  }

  manageAccount() {
    this.keycloakService.client().accountManagement();
  }

  logout() {
    this.keycloakService.logout();
  }

}
