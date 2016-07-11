import { provideRouter, RouterConfig }  from '@angular/router';
//import { ModuleFacturaComponent } from './documentos-electronicos/module-factura/module-factura.component';
import { FacturaRoutes } from './documentos-electronicos/module-factura/module-factura.routes';
export const routes = [
  ...FacturaRoutes
//  { path: 'crisis-center', component: CrisisListComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];