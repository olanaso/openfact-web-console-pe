import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionalInformationComponent } from './additional-information.component';
import { AdditionalInformationRoutingModule } from './additional-information-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdditionalInformationRoutingModule
  ],
  declarations: [AdditionalInformationComponent]
})
export class AdditionalInformationModule { }
