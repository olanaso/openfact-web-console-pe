import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateOrganizationComponent } from './create-organization';
import { OrganizationsComponent } from './organizations/organizations.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/organizations',
        pathMatch: 'full'
      },
      { path: 'organizations', component: OrganizationsComponent },
      { path: 'create-organization', component: CreateOrganizationComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }