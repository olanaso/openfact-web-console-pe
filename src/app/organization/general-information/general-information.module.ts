import { NgxButtonModule } from './../../ngx-button/ngx-button.module';
import { NgxFormsModule } from './../../ngx-forms/ngx-forms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInformationComponent } from './general-information.component';
import { GeneralInformationRoutingModule } from './general-information-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GeneralInformationRoutingModule,
    ReactiveFormsModule,
    NgxFormsModule,
    NgxButtonModule
  ],
  declarations: [GeneralInformationComponent]
})
export class GeneralInformationModule { }
