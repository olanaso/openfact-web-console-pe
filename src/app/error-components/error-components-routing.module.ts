import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFound404Component } from './not-found-404/not-found-404.component';

@NgModule({
  imports: [
    RouterModule.forChild([
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