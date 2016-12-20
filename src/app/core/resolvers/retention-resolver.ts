/**
 * Created by lxpary on 15/12/16.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Retention } from '../../core/models/retention.model';
import { DataService } from '../../core/data/data.service';

import { findParam } from './find-param';

@Injectable()
export class RetentionResolver implements Resolve<Retention>{

  constructor(private dataService: DataService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> {
    let organizationId = findParam('organization', route);
    let retentionId = findParam('retention', route);
    let organization = this.dataService.organizations().build(organizationId);

    return this.dataService.retentions().findById(organization, retentionId);
  }
}
