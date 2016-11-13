import { Injectable } from '@angular/core';
import { Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { KeycloakService } from '../../keycloak.service';

@Injectable()
export class CanActivateAllowedOrganizations implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let allowedOrganizations = route.data['organizations'] || [];

        if (allowedOrganizations.length == 0) {
            return false;
        }

        let tokenParsed = KeycloakService.auth.authz.tokenParsed;
        let organization = tokenParsed['organization'];
        return allowedOrganizations.indexOf(organization) != -1;
    }

}
