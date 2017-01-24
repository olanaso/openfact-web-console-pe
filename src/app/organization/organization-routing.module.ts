import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { OrganizationComponent } from './organization.component';
import { OrganizationResolverService } from './../core/resolvers/organization-resolver.service';
import { SettingsAdditionalInformationComponent } from './settings-additional-information/settings-additional-information.component';
import { SettingsGeneralInformationComponent } from './settings-general-information/settings-general-information.component';

const routes: Routes = [
  {
    path: '',
    component: OrganizationComponent,
    resolve: {
      organization: OrganizationResolverService
    },
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'settings/general-information',
        component: SettingsGeneralInformationComponent,
        resolve: {
          organization: OrganizationResolverService
        }
      },
      {
        path: 'settings/additional-information',
        component: SettingsAdditionalInformationComponent,
        resolve: {
          organization: OrganizationResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OrganizationRoutingModule { }
