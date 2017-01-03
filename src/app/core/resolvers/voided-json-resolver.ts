/**
 * Created by lxpary on 03/01/17.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Voided } from '../../core/models/voided.model';
import { DataService } from '../../core/data/data.service';

import { findParam } from './find-param';

@Injectable()
export class VoidedJsonResolver implements Resolve<Voided>{

  constructor(private dataService: DataService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> {
    let organizationId = findParam('organization', route);
    let voidedId = findParam('voided', route);
    let organization = this.dataService.organizations().build(organizationId);

    return this.dataService.voideds().findByIdAsJson(organization, voidedId);
  }
}
