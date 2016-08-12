import { Routes, RouterModule } from '@angular/router';

import { ListOrganizationComponent } from './list-organization';
import { CreateOrganizationComponent } from './create-organization';
import { OverviewComponent } from './edit-organization/overview';
import { SettingsComponent } from './edit-organization/settings';
import { ListInvoiceComponent} from './invoices/list-invoice';
import { InvoicesComponent} from './invoices';
import { GeneralInformationComponent } from './edit-organization/settings/general-information';
import { AddressComponent } from './edit-organization/settings/address';

import { OrganizationResolve } from '../../services/resolvers/organization-resolve';

const organizationsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'organizations',
    pathMatch: 'full'
  },
  {
    path: 'organizations',
    component: ListOrganizationComponent
  },
  {
    path: 'create-organization',
    component: CreateOrganizationComponent
  },
  {
    path: 'edit-organization/:organization',
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: OverviewComponent
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
          },
        ]
      },
      {
        path: 'invoices',
        //component:InvoicesComponent
        component: ListInvoiceComponent
      }
    ]
  }
];

export const organizationsRouting = RouterModule.forChild(organizationsRoutes);