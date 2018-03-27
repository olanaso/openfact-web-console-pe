import { AllRoutingModule } from './all-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all.component';

@NgModule({
  imports: [
    CommonModule,
    AllRoutingModule
  ],
  declarations: [AllComponent]
})
export class AllModule { }
