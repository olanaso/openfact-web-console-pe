import { Injectable } from '@angular/core';
import { Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, CanActivate } from '@angular/router';

import { KeycloakService } from '../keycloak.service';

@Injectable()
export class AllowedDataOrganizations implements CanLoad, CanActivate {

    constructor(private router: Router) { }

    canLoad(route: Route) {
        let allowedOrganizations = route.data['organizations'] || [];

        if (allowedOrganizations.length == 0) {
            return false;
        }

        let tokenParsed = KeycloakService.auth.authz.tokenParsed;
        let tokenOrganization = tokenParsed['organization'];

        if (allowedOrganizations.indexOf(tokenOrganization) != -1) {
            return true;
        } else {
            this.router.navigate(['/unauthorized']);
        }
        return false;
    }

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
