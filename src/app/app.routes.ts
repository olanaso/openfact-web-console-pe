import { provideRouter, RouterConfig }  from '@angular/router';
//import { ModuleFacturaComponent } from './documentos-electronicos/module-factura/module-factura.component';
import { FacturaRoutes } from './documentos-electronicos/module-factura/module-factura.routes';
//import { CPRoutes } from './documentos-electronicos/documentos-electronicos.routes';

export const routes = [
  ...FacturaRoutes

// { path: 'heroes1', component: ModuleFacturaComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];