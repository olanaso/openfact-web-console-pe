import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CanLoadMasterOrganization } from './shared/guards/can-load-master-organization';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/admin',
                pathMatch: 'full'
            },
            {
                path: 'admin',
                loadChildren: 'app/admin/admin.module#AdminModule',
                canLoad: [CanLoadMasterOrganization],
            },
            {
                path: 'console/organizations/:organization',
                loadChildren: 'app/organization/organization.module#OrganizationModule'
            }
        ], { useHash: true, enableTracing: true })
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }