import { provideRouter, RouterConfig } from '@angular/router';

import { AboutComponent } from './components/about';
import { ErrorComponent } from './components/error';
import { OrganizationsRoutes } from './components/organizations/organizations.routes';

// Route Configuration
export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/organizations',
    pathMatch: 'full'
  },
  { path: 'about', component: AboutComponent },
  { path: 'error', component: ErrorComponent },
  ...OrganizationsRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
