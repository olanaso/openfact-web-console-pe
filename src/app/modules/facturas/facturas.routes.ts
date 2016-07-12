import { provideRouter, RouterConfig }  from '@angular/router';

import { FacturasComponent } from './facturas.component';
import { FacturasNuevoComponent } from './facturas-nuevo';
import { FacturasEditarComponent } from './facturas-editar';

export const FacturaRoutes: RouterConfig = [
  {
    path: 'facturas',
    component: FacturasComponent
  },
  {
    path: 'facturas/nuevo',
    component: FacturasNuevoComponent
  },
  {
    path: 'facturas/editar/:idFactura',
    component: FacturasEditarComponent
  },
];