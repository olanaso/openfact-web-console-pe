import {Routes, RouterModule} from '@angular/router';
import {AboutComponent, ErrorComponent, ListOrganizationComponent, CreateOrganizationComponent} from './pages';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/organizations',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'error',
    component: ErrorComponent
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
    path: 'organizations/:organization',
    loadChildren: './app/organization/organization.module#OrganizationModule'
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);