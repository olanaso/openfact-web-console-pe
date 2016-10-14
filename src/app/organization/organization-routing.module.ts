import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrganizationComponent } from './organization.component';
import { DashboardComponent } from './dashboard';
import { SettingsComponent } from './settings';

import { OrganizationResolver } from './utils';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: OrganizationComponent,
        resolve: {
          organization: OrganizationResolver
        },
        children: [
          {
            path: '',
            children: [
              { path: 'settings', component: SettingsComponent },
              { path: 'dashboard', component: DashboardComponent },
              { path: '', redirectTo: 'dashboard' }
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
export class OrganizationRoutingModule { }