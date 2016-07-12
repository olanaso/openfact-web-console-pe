import { provideRouter, RouterConfig }  from '@angular/router';

import { FacturasComponent } from './facturas.component';
import { FacturasNuevoComponent } from './facturas-nuevo';
import { FacturasEditarComponent } from './facturas-editar';
import { FacturasEnviarComponent } from './facturas-enviar';
import { FacturasImportarComponent } from './facturas-importar';

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
  {
    path: 'facturas/enviar',
    component: FacturasEnviarComponent
  },
  {
    path: 'facturas/importar',
    component: FacturasImportarComponent
  },




];