import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCreditnoteComponent } from './new-creditnote.component';
import { NewCreditnoteRoutingModule } from './new-creditnote-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NewCreditnoteRoutingModule
  ],
  declarations: [NewCreditnoteComponent]
})
export class NewCreditnoteModule { }
