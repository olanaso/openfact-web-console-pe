import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Organization, DataService } from '../shared';

@Injectable()
export class OrganizationResolver implements Resolve<Organization>{

    constructor(private dataService: DataService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> | Promise<any> {
        return this.dataService.organizations().findById(route.params['organization']);
    }
}
