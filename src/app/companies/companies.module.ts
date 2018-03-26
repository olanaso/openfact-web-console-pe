import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { LoadingModule } from './../loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CompaniesRoutingModule,
    LoadingModule
  ],
  declarations: [CompaniesComponent]
})
export class CompaniesModule { }
