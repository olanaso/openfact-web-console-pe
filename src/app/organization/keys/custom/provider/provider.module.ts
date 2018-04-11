import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { NgxButtonModule } from './../../../../ngx-button/ngx-button.module';

import { ComponentConfigComponent } from './component-config/component-config.component';
import { ProviderComponent } from './provider.component';
import { ProviderRoutingModule } from './provider-routing.module';
import { ReadFileModule } from './../read-file/read-file.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProviderRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    JWBootstrapSwitchModule,
    NgxButtonModule,
    ReadFileModule
  ],
  declarations: [
    ProviderComponent,
    ComponentConfigComponent
  ]
})
export class ProviderModule { }
