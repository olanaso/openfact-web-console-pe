import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AllowedDataOrganizations } from './core/guards/allowed-data-organizations';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/admin/organizations',
                pathMatch: 'full'
            },
            {
                path: 'admin',
                loadChildren: 'app/admin/admin.module#AdminModule',
                data: { organizations: ['master'] },
                canLoad: [AllowedDataOrganizations]
            },
            {
                path: 'organizations/:organization',
                loadChildren: 'app/organization/organization.module#OrganizationModule'
            }
        ], { useHash: false, enableTracing: false, preloadingStrategy: PreloadAllModules })
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }