import {Routes, RouterModule} from '@angular/router';
import {AboutComponent, ErrorComponent, ListOrganizationComponent, CreateOrganizationComponent} from './pages';
import { AuthGuard } from './services/authguard/index';

import { authProviders }  from './services/authguard/login.routing';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/organizations',
    pathMatch: 'full'
  },
  {
    path: 'organizations',
    component: ListOrganizationComponent,

  },
  {
    path: 'create-organization',
    component: CreateOrganizationComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ver-inmvoice']
    }
  },
  {
    path: 'organization/:organization',
    loadChildren: 'app/organization/organization.module#OrganizationModule'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },


];

export const appRoutingProviders: any[] = [
  authProviders,

];

export const routing = RouterModule.forRoot(appRoutes);