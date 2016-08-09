import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { OrganizationModel } from '../models/organization-model';
import { OrganizationProviderService } from '../providers/organization-provider.service';



import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/catch';

@Injectable()
export class OrganizationResolve implements Resolve<Observable<OrganizationModel>> {

    constructor(private http: Http, private organizationProvider: OrganizationProviderService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OrganizationModel> {
        return this.organizationProvider.findById(route.params['organization']);
    }

}
/*export class OrganizationResolve implements Resolve<string> {

    constructor() { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
        console.log('returning resolved data');
        return 'For science...you monster';
    }

}*/