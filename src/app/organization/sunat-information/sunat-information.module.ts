import { NgxButtonModule } from './../../ngx-button/ngx-button.module';
import { NgxFormsModule } from './../../ngx-forms/ngx-forms.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunatInformationComponent } from './sunat-information.component';
import { SunatInformationRoutingModule } from './sunat-information-routing.module';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SunatInformationRoutingModule,
    JWBootstrapSwitchModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormsModule,
    NgxButtonModule,
  ],
  declarations: [SunatInformationComponent]
})
export class SunatInformationModule { }
