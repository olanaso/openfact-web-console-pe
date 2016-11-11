
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrganizationsComponent } from './organizations/organizations.component';
import { OrganizationsCreateComponent } from './organizations-create/organizations-create.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/organizations',
        pathMatch: 'full'
      },
      {
        path: 'organizations',
        children: [
          { path: '', component: OrganizationsComponent },
          { path: 'create', component: OrganizationsCreateComponent }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }