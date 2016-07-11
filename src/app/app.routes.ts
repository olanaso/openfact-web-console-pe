import { provideRouter, RouterConfig }  from '@angular/router';
//import { ModuleFacturaComponent } from './documentos-electronicos/module-factura/module-factura.component';
import { HeroesRoutes } from './documentos-electronicos/module-factura/module-factura.routes';
export const routes = [
  ...HeroesRoutes
//  { path: 'crisis-center', component: CrisisListComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];