import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../../core/data/data.service';
import { findParam } from './find-param';

@Injectable()
export class EventsConfigResolver implements Resolve<any>{

    constructor(private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {
        let organizationId = findParam('organization', route);        
        let organization = this.dataService.organizations().build(organizationId);

        return this.dataService.organizations().getEventsConfig(organization);
    }

}