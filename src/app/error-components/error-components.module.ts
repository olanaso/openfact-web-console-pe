import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErrorComponentsRoutingModule } from './error-components-routing.module';

import { NotFound404Component } from './not-found-404/not-found-404.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ErrorComponentsRoutingModule
  ],
  declarations: [
    NotFound404Component
  ]
})
export class ErrorComponentsModule { }
