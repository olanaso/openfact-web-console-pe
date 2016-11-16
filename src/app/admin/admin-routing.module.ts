import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AllowedDataRoles } from '../core/guards/allowed-data-roles';
import { AllowedDataOrganizations } from '../core/guards/allowed-data-organizations';

import { AdminComponent } from './admin.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { ServerInfoProvidersComponent } from './server-info-providers/server-info-providers.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AdminComponent,
                data: { organizations: ['master'], roles: ['admin'] },
                canActivate: [AllowedDataRoles, AllowedDataOrganizations],
                children: [
                    {
                        path: 'organizations',
                        children: [
                            {
                                path: '',
                                component: OrganizationsComponent
                            },
                            {
                                path: 'create',
                                component: CreateOrganizationComponent
                            }
                        ]
                    },
                    {
                        path: 'server-info',
                        children: [
                            {
                                path: '',
                                component: ServerInfoComponent
                            },
                            {
                                path: 'providers',
                                component: ServerInfoProvidersComponent
                            }
                        ]
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }