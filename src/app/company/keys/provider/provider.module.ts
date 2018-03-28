import { RouterModule } from '@angular/router';
import { NgxButtonModule } from './../../../ngx-button/ngx-button.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProviderRoutingModule } from './provider-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderComponent } from './provider.component';
import { ComponentConfigComponent } from './component-config/component-config.component';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProviderRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    JWBootstrapSwitchModule,
    NgxButtonModule
  ],
  declarations: [ProviderComponent, ComponentConfigComponent]
})
export class ProviderModule { }
