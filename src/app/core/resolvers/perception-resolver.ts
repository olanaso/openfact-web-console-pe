/**
 * Created by lxpary on 14/12/16.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Perception } from '../../core/models/perception.model';
import { DataService } from '../../core/data/data.service';

import { findParam } from './find-param';

@Injectable()
export class PerceptionResolver implements Resolve<Perception>{

  constructor(private dataService: DataService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> {
    let organizationId = findParam('organization', route);
    let perceptionId = findParam('perception', route);
    let organization = this.dataService.organizations().build(organizationId);

    return this.dataService.perceptions().findById(organization, perceptionId);
  }
}
