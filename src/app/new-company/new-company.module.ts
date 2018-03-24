import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCompanyComponent } from './new-company.component';
import { NewCompanyRoutingModule } from './new-company-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NewCompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NewCompanyComponent]
})
export class NewCompanyModule { }
