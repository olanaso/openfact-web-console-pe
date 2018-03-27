import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInformationComponent } from './general-information.component';
import { GeneralInformationRoutingModule } from './general-information-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GeneralInformationRoutingModule
  ],
  declarations: [GeneralInformationComponent]
})
export class GeneralInformationModule { }
