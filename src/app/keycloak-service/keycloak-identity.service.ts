import { Injectable } from '@angular/core';

// If using a local keycloak.js, uncomment this import.  With keycloak.js fetched
// from the server, you get a compile-time warning on use of the Keycloak()
// method below.  I'm not sure how to fix this, but it's certainly cleaner
// to get keycloak.js from the server.
//
import * as Keycloak from './keycloak';
import * as KeycloakAuthz from './keycloak-authz';

type KeycloakIdentity = KeycloakAuthz.KeycloakAuthorizationInstance;

@Injectable()
export class KeycloakIdentityService {

  static authorization: KeycloakIdentity;

  static init(keycloak: Keycloak.KeycloakInstance) {
    console.log("init", KeycloakAuthz);
    KeycloakIdentityService.authorization = KeycloakAuthz(keycloak);
  }

  authorize(rpt: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      KeycloakIdentityService.authorization
        .authorize(rpt)
        .then(
          (rpt) => {
            resolve(<string>KeycloakIdentityService.authorization.rpt);
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
