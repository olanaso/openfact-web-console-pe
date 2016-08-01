import { provideRouter, RouterConfig }  from '@angular/router';

import { EmisoresComponent } from './emisores.component';
import { EmisoresNuevoComponent } from './emisores-nuevo';
import { EmisoresEditarComponent } from './emisores-editar';


export const EmisoresRoutes: RouterConfig = [
  {
    path: 'emisores',
    component: EmisoresComponent
  },
  {
    path: 'emisores/nuevo',
    component: EmisoresNuevoComponent
  },
 {
    path: 'emisores/editar/:name',
    //name: 'emisorEdit',
    component: EmisoresEditarComponent
  }

  


];