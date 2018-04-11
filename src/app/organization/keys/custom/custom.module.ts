import { CustomRoutingModule } from './custom-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom.component';

@NgModule({
  imports: [
    CommonModule,
    CustomRoutingModule
  ],
  declarations: [CustomComponent]
})
export class CustomModule { }
