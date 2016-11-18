import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Invoice } from '../../core/models/invoice.model';
import { DataService } from '../../core/data/data.service';

import { findParam } from './find-param';

@Injectable()
export class InvoiceResolver implements Resolve<Invoice>{

    constructor(private dataService: DataService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> | Promise<any> {
        let organizationId = findParam('organization', route);
        let invoiceId = findParam('invoice', route);
        let organization = this.dataService.organizations().build(organizationId);

        return this.dataService.invoices().findById(organization, invoiceId);
    }
}
