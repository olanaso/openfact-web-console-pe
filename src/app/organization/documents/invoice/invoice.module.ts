import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InvoiceComponent } from './invoice.component';
import { InvoiceRoutingModule } from './invoice-routing.module';

import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxButtonModule } from './../../../ngx-button/ngx-button.module';
import { NgxFormsModule } from './../../../ngx-forms/ngx-forms.module';
import { DocumentFormModule } from './../document-form/document-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    JWBootstrapSwitchModule,
    CurrencyMaskModule,
    ButtonsModule,
    BsDatepickerModule,
    NgxFormsModule,
    NgxButtonModule,
    DocumentFormModule,

    InvoiceRoutingModule,
  ],
  declarations: [
    InvoiceComponent
  ],
  providers: [

  ]
})
export class InvoiceModule { }
