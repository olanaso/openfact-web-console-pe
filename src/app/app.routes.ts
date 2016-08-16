import {Routes, RouterModule} from '@angular/router';
import {AboutComponent, ErrorComponent, ListOrganizationComponent, CreateOrganizationComponent} from './pages';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/organizations',
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
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);