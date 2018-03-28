import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CompaniesRoutingModule
  ],
  declarations: [CompaniesComponent]
})
export class CompaniesModule { }
