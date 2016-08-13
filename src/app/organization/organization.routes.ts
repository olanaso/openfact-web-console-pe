import {Routes, RouterModule} from '@angular/router';

import {OrganizationResolve} from '../services';

import {OverviewComponent} from './overview';
import {CreateInvoiceComponent, ListInvoiceComponent} from './invoices';
import {SettingsComponent, GeneralInformationComponent, AddressComponent, TasksScheduleComponent} from './settings';

const organizationRoutes: Routes = [
  {
    path: 'organization/:organization',
    redirectTo: 'organization/:organization/overview',
    pathMatch: 'prefix'
  },
  {
    path: 'overview',
    component: OverviewComponent,
    resolve: {
      organization: OrganizationResolve
    },
  },
  {
    path: 'invoices',
    component: ListInvoiceComponent,
    resolve: {
      organization: OrganizationResolve
    }
  },
  {
    path: 'create-invoice',
    component: CreateInvoiceComponent,
    resolve: {
      organization: OrganizationResolve
    }
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
        pathMatch: 'prefix'
      },
      {
        path: 'general-information',
        component: GeneralInformationComponent
      },
      {
        path: 'address',
        component: AddressComponent
      },
      {
        path: 'tasks-schedule',
        component: TasksScheduleComponent
      }
    ]
  }
];

export const organizationRouting = RouterModule.forChild(organizationRoutes);