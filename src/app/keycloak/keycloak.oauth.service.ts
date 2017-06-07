import { Injectable } from '@angular/core';

declare var Keycloak: any;

@Injectable()
export class KeycloakOAuthService {

  static auth: any = {};

  static init(): Promise<any> {
    const keycloakAuth: any = new Keycloak('/config/keycloak.json');

    return new Promise((resolve, reject) => {
      keycloakAuth.init({ onLoad: 'login-required' })
        .success(() => {
          KeycloakOAuthService.auth.authz = keycloakAuth;
          resolve();
        })
        .error(() => {
          reject();
        });
    });
  }

  constructor() { }

  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (KeycloakOAuthService.auth.authz.token) {
        KeycloakOAuthService.auth.authz.updateToken(5)
          .success(() => {
            resolve(<string>KeycloakOAuthService.auth.authz.token);
          })
          .error(() => {
            reject('Failed to refresh token');
            window.location.reload();
          });
      } else {
        reject('Not loggen in');
      }
    });
  }

}
