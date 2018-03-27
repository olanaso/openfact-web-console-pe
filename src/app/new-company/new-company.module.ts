import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCompanyComponent } from './new-company.component';
import { NewCompanyRoutingModule } from './new-company-routing.module';
import { NgxBaseModule } from './../ngx-base/ngx-base.module';
import { NgxFormsModule } from './../ngx-forms/ngx-forms.module';
import { NgxButtonModule } from './../ngx-button/ngx-button.module';

@NgModule({
  imports: [
    CommonModule,
    NewCompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBaseModule,
    NgxFormsModule,
    NgxButtonModule
  ],
  declarations: [NewCompanyComponent]
})
export class NewCompanyModule { }