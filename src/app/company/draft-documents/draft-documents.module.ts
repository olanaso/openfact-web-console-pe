import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftDocumentsComponent } from './draft-documents.component';
import { DraftDocumentsRoutingModule } from './draft-documents-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DraftDocumentsRoutingModule
  ],
  declarations: [DraftDocumentsComponent]
})
export class DraftDocumentsModule { }
