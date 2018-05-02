import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingButtonComponent } from './working-button/working-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WorkingButtonComponent
  ],
  exports: [
    WorkingButtonComponent
  ]
})
export class NgxButtonModule { }
