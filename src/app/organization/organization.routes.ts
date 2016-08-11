import {Routes, RouterModule} from '@angular/router';

import {OrganizationResolve} from '../services';

import {OverviewComponent} from './overview';
import {SettingsComponent, GeneralInformationComponent, AddressComponent} from './settings';

const organizationRoutes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: OverviewComponent,
    resolve: {
      organization: OrganizationResolve
    },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    resolve: {
      organization: OrganizationResolve
    },
    children: [
      {
        path: '',
        redirectTo: 'general-information',
        pathMatch: 'full'
      },
      {
        path: 'general-information',
        component: GeneralInformationComponent
      },
      {
        path: 'address',
        component: AddressComponent
      }
    ]
  }
];

export const organizationRouting = RouterModule.forChild(organizationRoutes);