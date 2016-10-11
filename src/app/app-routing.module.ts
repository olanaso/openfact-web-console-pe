import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'organization',
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