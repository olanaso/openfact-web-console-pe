import { Injectable } from "@angular/core";

declare var Keycloak: any;
declare var KeycloakAuthorization: any;

@Injectable()
export class KeycloakService {
  static auth: any = {};

  static Identity = function (keycloak) {
    this.loggedIn = true;

    this.claims = {};
    this.claims.name = keycloak.idTokenParsed.name;

    this.authc = {};
    this.authc.token = keycloak.token;

    this.authz = keycloak;

    this.accountManagement = function () {
      keycloak.accountManagement();
    };

    this.logout = function () {
      keycloak.logout();
    };

    this.hasRole = function (name) {
      if (keycloak && keycloak.hasRealmRole(name)) {
        return true;
      }
      return false;
    };

    this.isAdmin = function () {
      return this.hasRole("admin");
    };

    this.authorization = new KeycloakAuthorization(keycloak);
  }

  static init(): Promise<any> {
    let keycloakAuth: any = new Keycloak('keycloak.json');

    return new Promise((resolve, reject) => {
      keycloakAuth.init({ onLoad: 'login-required' })
        .success(() => {

          console.log('User is now authenticated.');

          KeycloakService.auth = new KeycloakService.Identity(keycloakAuth);

          resolve();

        })
        .error(() => {
          reject();
        });
    });
  }
}