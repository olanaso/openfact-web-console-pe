import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrganizationComponent } from './organization.component';
import { DashboardComponent } from './dashboard';
import { SettingsComponent } from './settings';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: OrganizationComponent,
        children: [
          {
            path: '',
            children: [
              { path: 'settings', component: SettingsComponent },
              { path: '', component: DashboardComponent }
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