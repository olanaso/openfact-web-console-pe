import { provideRouter, RouterConfig }  from '@angular/router';

import { EmisoresComponent } from './emisores.component';
import { EmisoresNuevoComponent } from './emisores-nuevo';


export const EmisoresRoutes: RouterConfig = [
  {
    path: 'emisores',
    component: EmisoresComponent
  },
  {
    path: 'emisores/nuevo',
    component: EmisoresNuevoComponent
  }
  


];