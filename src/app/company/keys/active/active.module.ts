import { LoadingModule } from './../../../loading/loading.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent } from './active.component';
import { ActiveRoutingModule } from './active-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ActiveRoutingModule,
    LoadingModule
  ],
  declarations: [ActiveComponent]
})
export class ActiveModule { }
