import { Injectable } from '@angular/core';

// If using a local keycloak.js, uncomment this import.  With keycloak.js fetched
// from the server, you get a compile-time warning on use of the Keycloak()
// method below.  I'm not sure how to fix this, but it's certainly cleaner
// to get keycloak.js from the server.
//
import * as KeycloakAuthz from './keycloak-authz';

type KeycloakIdentity = KeycloakAuthz.KeycloakAuthorizationInstance;

@Injectable()
export class KeycloakIdentityService {

  static authz: KeycloakIdentity;

  static init(keycloak: any) {
    KeycloakIdentityService.authz = KeycloakAuthz(keycloak);
  }

  authorize(wwwAuthenticateHeader: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      KeycloakIdentityService.authz
        .authorize(wwwAuthenticateHeader)
        .then(
          () => {
            resolve(<string>KeycloakIdentityService.authz.rpt);
          },
          () => {
            reject('You can not access or perform the requested operation on this resource.');
          },
          () => {
            reject('Unexpected error from server.');
          }
        );
    });
  }

}
