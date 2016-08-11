import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {OrganizationModel} from '../models';
import {OrganizationProviderService} from '../providers';

@Injectable()
export class OrganizationResolve implements Resolve<OrganizationModel> {

    constructor(
        private http: Http,
        private organizationProvider: OrganizationProviderService) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
        let id = route.params['organization'];
        return this.organizationProvider.findById(id);
    }

}