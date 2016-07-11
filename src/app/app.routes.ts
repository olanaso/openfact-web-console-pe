import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent } from './pages/home';
import { AboutComponent } from './pages/about';
import { FacturaRoutes } from './modules/facturas';
export const routes: RouterConfig = [
  /*{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },*/
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  ...FacturaRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

