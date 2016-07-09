import { provideRouter, RouterConfig }  from '@angular/router';
import { ModuleFacturaComponent } from './documentos-electronicos/module-factura/module-factura.component';

const routes: RouterConfig = [
  {
    path: 'heroes',
    component: ModuleFacturaComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];