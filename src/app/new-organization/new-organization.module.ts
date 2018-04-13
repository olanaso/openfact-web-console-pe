import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewOrganizationComponent } from './new-organization.component';
import { NewOrganizationRoutingModule } from './new-organization-routing.module';
import { NgxBaseModule } from './../ngx-base/ngx-base.module';
import { NgxFormsModule } from './../ngx-forms/ngx-forms.module';
import { NgxButtonModule } from './../ngx-button/ngx-button.module';

@NgModule({
  imports: [
    CommonModule,
    NewOrganizationRoutingModule,
    ReactiveFormsModule,
    NgxBaseModule,
    NgxFormsModule,
    NgxButtonModule
  ],
  declarations: [NewOrganizationComponent]
})
export class NewOrganizationModule { }
