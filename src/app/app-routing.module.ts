import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CanLoadMasterOrganization } from './shared/guards/can-load-master-organization';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/organizations',
                pathMatch: 'full'
            },
            {
                path: 'organizations',
                canLoad: [CanLoadMasterOrganization],
                loadChildren: 'app/admin/admin.module#AdminModule'
            },
            {
                path: 'organization/:organization',
                loadChildren: 'app/organization/organization.module#OrganizationModule'
            }
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }