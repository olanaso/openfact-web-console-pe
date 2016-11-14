import { Injectable } from '@angular/core';
import { Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { KeycloakService } from '../../keycloak.service';

@Injectable()
export class CanActivateAllowedRoles implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let allowedRoles = route.data['roles'] || [];

        if (allowedRoles.length == 0) {
            return false;
        }

        let result = true;
        allowedRoles.forEach(rol => {
            if (!KeycloakService.auth.authz.hasRealmRole(rol)) {
                result = false;
            }
        });
        return result;
    }

}
