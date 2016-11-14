import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RootOrganizationResolver } from './resolvers/root-organization-resolver';

import { OrganizationComponent } from './organization.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'organization/:organization',
                component: OrganizationComponent,
                resolve: {
                    organization: RootOrganizationResolver
                }
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class OrganizationRoutingModule { }