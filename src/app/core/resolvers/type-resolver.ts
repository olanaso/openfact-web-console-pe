import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../../core/data/data.service';

import { findParam } from './find-param';

@Injectable()
export class InvoiceTypeResolver implements Resolve<any>{

    constructor(private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {
        let organizationId: string = findParam('organization', route);
        return this.dataService.genericTypePeru().searchTipoComprobante(organizationId);
    }
}

@Injectable()
export class TipoDocumentoEntidadResolver implements Resolve<any>{

    constructor(private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {
        let organizationId: string = findParam('organization', route);
        return this.dataService.genericTypePeru().searchTipoDocumento(organizationId);
    }
}

@Injectable()
export class TipoIgvResolver implements Resolve<any>{

    constructor(private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {
        let organizationId: string = findParam('organization', route);
        return this.dataService.genericTypePeru().searchTipoAfectacionIgv(organizationId);
    }
}