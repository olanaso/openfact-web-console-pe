import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxFormsModule } from './../../../ngx-forms/ngx-forms.module';

import { DocumentLineComponent } from './document-line/document-line.component';
import { DocumentTableLinesComponent } from './document-table-lines/document-table-lines.component';
import { DocumentTotalAdditionalInformationComponent } from './document-total-additional-information/document-total-additional-information.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    NgxFormsModule
  ],
  declarations: [
    DocumentLineComponent,
    DocumentTableLinesComponent,
    DocumentTotalAdditionalInformationComponent
  ],
  exports: [
    DocumentTableLinesComponent,
    DocumentTotalAdditionalInformationComponent
  ]
})
export class DocumentFormModule { }
