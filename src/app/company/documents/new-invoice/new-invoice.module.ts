import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewInvoiceComponent } from './new-invoice.component';
import { NewInvoiceRoutingModule } from './new-invoice-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NewInvoiceRoutingModule
  ],
  declarations: [NewInvoiceComponent]
})
export class NewInvoiceModule { }
