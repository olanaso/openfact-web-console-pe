import { NgxButtonModule } from './../../../ngx-button/ngx-button.module';
import { NgxFormsModule } from './../../../ngx-forms/ngx-forms.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewInvoiceComponent } from './new-invoice.component';
import { NewInvoiceRoutingModule } from './new-invoice-routing.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DocumentTableLinesModule } from './../document-table-lines/document-table-lines.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewInvoiceRoutingModule,
    ButtonsModule,
    NgxFormsModule,
    NgxButtonModule,
    DocumentTableLinesModule
  ],
  declarations: [NewInvoiceComponent]
})
export class NewInvoiceModule { }
