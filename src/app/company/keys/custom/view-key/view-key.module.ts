import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewKeyComponent } from './view-key.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    ModalModule
  ],
  declarations: [ViewKeyComponent],
  exports: [ViewKeyComponent]
})
export class ViewKeyModule { }
