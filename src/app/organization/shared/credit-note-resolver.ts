import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CreditNote } from '../../core/models/credit-note.model';
import { DataService } from '../../core/data/data.service';

import { findParam } from './find-param';

@Injectable()
export class CreditNoteResolver implements Resolve<CreditNote>{

    constructor(private dataService: DataService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> | Promise<any> {
        let organizationId = findParam('organization', route);
        let creditNoteId = findParam('creditNote', route);
        let organization = this.dataService.organizations().build(organizationId);

        let queryParams = new URLSearchParams();
        queryParams.set("includeXml", "true")

        return this.dataService.creditnotes().findById(organization, creditNoteId, queryParams);
    }
}
