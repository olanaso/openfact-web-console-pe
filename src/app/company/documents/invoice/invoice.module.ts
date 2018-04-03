import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InvoiceComponent } from './invoice.component';
import { InvoiceRoutingModule } from './invoice-routing.module';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxButtonModule } from './../../../ngx-button/ngx-button.module';
import { NgxFormsModule } from './../../../ngx-forms/ngx-forms.module';
import { DocumentTableLinesModule } from './../document-table-lines/document-table-lines.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    NgxFormsModule,
    NgxButtonModule,
    DocumentTableLinesModule,

    InvoiceRoutingModule,
  ],
  declarations: [InvoiceComponent]
})
export class InvoiceModule { }
