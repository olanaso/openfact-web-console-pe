import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftDocumentsComponent } from './draft-documents.component';
import { DraftDocumentsRoutingModule } from './draft-documents-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PipeModule } from 'patternfly-ng';

@NgModule({
  imports: [
    CommonModule,
    DraftDocumentsRoutingModule,
    TabsModule,
    PipeModule
  ],
  declarations: [DraftDocumentsComponent]
})
export class DraftDocumentsModule { }
