import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { Unauthorized401Component } from './unauthorized-401/unauthorized-401.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'unauthorized',
        component: Unauthorized401Component
      },
      {
        path: 'forbidden',
        component: ForbiddenComponent
      },
      {
        path: 'notfound',
        component: NotFoundComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorRoutingModule { }