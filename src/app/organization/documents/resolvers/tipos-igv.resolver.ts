import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SUNATGenericType } from './../../../ngx-openfact';
import { DocumentContextService } from '../documents-context.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TiposIGVResolver implements Resolve<SUNATGenericType[]> {

  constructor(private documentContext: DocumentContextService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SUNATGenericType[]> {
    return this.documentContext.loadTiposIGV();
  }

}
