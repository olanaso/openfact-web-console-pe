import { AllRoutingModule } from './all-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all.component';
import { ViewKeyModule } from './../view-key/view-key.module';

@NgModule({
  imports: [
    CommonModule,
    AllRoutingModule,
    ViewKeyModule
  ],
  declarations: [AllComponent]
})
export class AllModule { }
