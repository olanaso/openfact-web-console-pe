import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { OrganizationModel } from '../models/organization-model';
import { OrganizationProviderService } from '../providers/organization-provider.service';



import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/catch';

@Injectable()
export class OrganizationResolve implements Resolve<any> {

    constructor(private http: Http, private organizationProvider: OrganizationProviderService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        //return this.organizationProvider.findById(route.params['organization']);
         return this.http.get('http://localhost:8080/admin/organizations');
    }

}
