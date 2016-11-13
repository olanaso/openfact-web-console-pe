import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CanActivateAllowedRoles } from '../shared/guards/can-activate-allowed-roles';
import { CanActivateAllowedOrganizations } from '../shared/guards/can-activate-allowed-organizations';

import { OrganizationsComponent } from './organizations/organizations.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { ServerInfoProvidersComponent } from './server-info-providers/server-info-providers.component';

@NgModule({
  imports: [
    RouterModule.forChild([      
      {
        path: 'organizations',
        canActivate: [CanActivateAllowedOrganizations, CanActivateAllowedRoles],
        data: {
          organizations: ['master'],
          roles: ['admin']
        },
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
        canActivate: [CanActivateAllowedOrganizations, CanActivateAllowedRoles],
        data: {
          organizations: ['master'],
          roles: ['admin']
        },
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
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }