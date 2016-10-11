import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateOrganizationComponent } from './create-organization';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/create-organization',
        pathMatch: 'full'
      },
      { path: 'create-organization', component: CreateOrganizationComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }