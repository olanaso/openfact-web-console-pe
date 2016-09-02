
import { Injectable }     from '@angular/core';
import { CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot }    from '@angular/router';
import {KeycloakService} from '../../keycloak';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let rolesFrontEnd = <string>route.data['roles'];
    for (var index = 0; index < rolesFrontEnd.length; index++) {
      var bandFind = (KeycloakService.auth.authz.resourceAccess.openfactRest.roles.indexOf(rolesFrontEnd[index]) > -1);
      if (bandFind) return true
    }
    return false;
    // console.log(KeycloakService.auth.authz.realmAccess.roles);

  }
}