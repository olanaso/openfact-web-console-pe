import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Invoice } from '../../core/models/invoice.model';
import { DataService } from '../../core/data/data.service';

@Injectable()
export class InvoiceResolver implements Resolve<Invoice>{

    constructor(private dataService: DataService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> | Promise<any> {
        let organizationId = route.parent.parent.params['organization'];
        let organization = this.dataService.organizations().build(organizationId);
        return this.dataService.invoices().findById(organization, route.params['invoice']);
    }
}
