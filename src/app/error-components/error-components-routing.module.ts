import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFound404Component } from './not-found-404/not-found-404.component';
import { Unauthorized401Component } from './unauthorized-401/unauthorized-401.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'unauthorized',
        component: Unauthorized401Component
      },
      {
        path: '**',
        component: NotFound404Component
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorComponentsRoutingModule { }