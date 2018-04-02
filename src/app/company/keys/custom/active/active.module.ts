import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent } from './active.component';
import { ActiveRoutingModule } from './active-routing.module';
import { ViewKeyModule } from './../view-key/view-key.module';

@NgModule({
  imports: [
    CommonModule,
    ActiveRoutingModule,
    ViewKeyModule
  ],
  declarations: [ActiveComponent]
})
export class ActiveModule { }
