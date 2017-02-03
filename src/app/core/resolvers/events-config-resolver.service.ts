import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { DataService } from '../../core/data/data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { findParam } from './find-param';

@Injectable()
export class EventsConfigResolverService implements Resolve<any> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {
    let organizationId = findParam('organization', route);
    let organization = this.dataService.organizations().build(organizationId);

    return organization.getEventsConfig();
  }

}
