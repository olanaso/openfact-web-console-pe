import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCompanyComponent } from './new-company.component';
import { NewCompanyRoutingModule } from './new-company-routing.module';
import { NgxFormsModule } from './../ngx-forms/ngx-forms.module';

@NgModule({
  imports: [
    CommonModule,
    NewCompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormsModule
  ],
  declarations: [NewCompanyComponent]
})
export class NewCompanyModule { }
