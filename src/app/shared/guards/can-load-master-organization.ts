import { Injectable } from '@angular/core';
import { Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';

import { KeycloakService } from '../../keycloak.service';

@Injectable()
export class CanLoadMasterOrganization implements CanLoad {

    constructor(private router: Router) { }

    canLoad(route: Route) {
        let tokenParsed = KeycloakService.auth.authz.tokenParsed;
        let organization = tokenParsed['organization'];

        if (organization == 'master') {
            return true;
        }

        this.router.navigate(['/unauthorized']);
        return false;
    }

}
