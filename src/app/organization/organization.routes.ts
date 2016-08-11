import {Routes, RouterModule} from '@angular/router';

import {OverviewComponent} from './overview';
import {SettingsComponent} from './settings';

const organizationRoutes: Routes = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
    /*resolve: {
      organization: OrganizationResolve
    },*//*
    children: [
      {
        path: '',
        component: GeneralInformationComponent
      },
      {
        path: 'address',
        component: AddressComponent
      },
    ]*/
  }
];

export const organizationRouting = RouterModule.forChild(organizationRoutes);