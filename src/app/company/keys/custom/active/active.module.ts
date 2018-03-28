import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent } from './active.component';
import { ActiveRoutingModule } from './active-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ActiveRoutingModule,
  ],
  declarations: [ActiveComponent]
})
export class ActiveModule { }
