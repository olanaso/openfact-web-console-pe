import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrganizationComponent } from './organization.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralInformationSettingsComponent } from './general-information-settings/general-information-settings.component';
import { AdditionalInformationSettingsComponent } from './additional-information-settings/additional-information-settings.component';

import { RootOrganizationResolver } from './resolvers/root-organization-resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
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