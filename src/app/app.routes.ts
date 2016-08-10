import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about';
import { ErrorComponent } from './components/error';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  { 
    path: 'about',
    component: AboutComponent
  },
  { path: 'error', 
    component: ErrorComponent 
  },
  { path:  'organizations', 
    loadChildren: './app/components/organizations/organization.module#OrganizationModule' 
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);