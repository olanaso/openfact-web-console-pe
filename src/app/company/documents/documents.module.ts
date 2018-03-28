import { SearchModule } from './search/search.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents.component';
import { DocumentsRoutingModule } from './documents-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    SearchModule
  ],
  declarations: [DocumentsComponent]
})
export class DocumentsModule { }
