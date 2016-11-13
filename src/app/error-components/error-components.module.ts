import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErrorComponentsRoutingModule } from './error-components-routing.module';

import { ErrorHeaderComponent } from './error-header/error-header.component';
import { ErrorFooterComponent } from './error-footer/error-footer.component';
import { NotFound404Component } from './not-found-404/not-found-404.component';
import { Unauthorized401Component } from './unauthorized-401/unauthorized-401.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ErrorComponentsRoutingModule
  ],
  declarations: [
    ErrorHeaderComponent,
    ErrorFooterComponent,
    NotFound404Component,
    Unauthorized401Component
  ]
})
export class ErrorComponentsModule { }
