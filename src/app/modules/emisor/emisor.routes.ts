import { provideRouter, RouterConfig }  from '@angular/router';

import { EmisorComponent } from './emisor.component';
import { EmisorNuevoComponent } from './emisor-nuevo';


export const EmisorRoutes: RouterConfig = [
  {
    path: 'emisor',
    component: EmisorComponent
  },
  {
    path: 'emisor/nuevo',
    component: EmisorNuevoComponent
  }
  


];