import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDebitnoteComponent } from './new-debitnote.component';
import { NewDebitnoteRoutingModule } from './new-debitnote-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NewDebitnoteRoutingModule
  ],
  declarations: [NewDebitnoteComponent]
})
export class NewDebitnoteModule { }
