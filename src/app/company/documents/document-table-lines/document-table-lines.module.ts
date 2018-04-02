import { NgxFormsModule } from './../../../ngx-forms/ngx-forms.module';
import { DocumentLineComponent } from './document-line/document-line.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentTableLinesComponent } from './document-table-lines.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormsModule
  ],
  declarations: [
    DocumentTableLinesComponent,
    DocumentLineComponent
  ],
  exports: [DocumentTableLinesComponent]
})
export class DocumentTableLinesModule { }
