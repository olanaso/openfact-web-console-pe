import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Organization } from '../../services/models/organization';
import { DataService } from '../../services/data/data.service';

@Injectable()
export class SettingsOrganizationResolver implements Resolve<Organization>{

    constructor(private dataService: DataService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> | Promise<any> {
        return this.dataService.organizations().findById(route.parent.parent.params['organization']);
    }
}