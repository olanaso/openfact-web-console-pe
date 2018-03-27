import { NgxButtonModule } from './../../ngx-button/ngx-button.module';
import { NgxFormsModule } from './../../ngx-forms/ngx-forms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionalInformationComponent } from './additional-information.component';
import { AdditionalInformationRoutingModule } from './additional-information-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdditionalInformationRoutingModule,
    ReactiveFormsModule,
    NgxFormsModule,
    NgxButtonModule
  ],
  declarations: [AdditionalInformationComponent]
})
export class AdditionalInformationModule { }
