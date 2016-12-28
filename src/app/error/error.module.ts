// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ErrorRoutingModule } from './error-routing.module';

// Openfact modules
import { SharedModule } from '../shared/shared.module';

// Components
import { ErrorHeaderComponent } from './error-header/error-header.component';
import { ErrorFooterComponent } from './error-footer/error-footer.component';
import { NotFound404Component } from './not-found-404/not-found-404.component';
import { Unauthorized401Component } from './unauthorized-401/unauthorized-401.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ErrorRoutingModule,

    // Third modules
    
    // Openfact modules
    SharedModule
  ],
  declarations: [
    // Components
    ErrorHeaderComponent,
    ErrorFooterComponent,
    NotFound404Component,
    Unauthorized401Component
  ]
})
export class ErrorModule { }
