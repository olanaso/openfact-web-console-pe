import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';

import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { OrganizationComponentsModule } from '../../components/components.module';
import { DocumentComponentsModule } from './components/components.module';
import { DocumentAttachedDocumentsComponent } from './document-attached-documents/document-attached-documents.component';
import { DocumentSendEventsComponent } from './document-send-events/document-send-events.component';
import { DocumentResolverService } from '../../../core/resolvers/document-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'invoices', pathMatch: 'full' },
  {
    path: 'invoices',
    loadChildren: 'app/organization/ui/document/invoices/invoices.module#InvoiceModule'
  },
  {
    path: 'credit-notes',
    loadChildren: 'app/organization/ui/document/credit-notes/credit-notes.module#CreditNoteModule'
  },
  {
    path: 'debit-notes',
    loadChildren: 'app/organization/ui/document/debit-notes/debit-notes.module#DebitNoteModule'
  },
  {
    path: 'perceptions',
    loadChildren: 'app/organization/ui/document/perceptions/perceptions.module#PerceptionModule'
  },
  {
    path: 'retentions',
    loadChildren: 'app/organization/ui/document/retentions/retentions.module#RetentionModule'
  },
  {
    path: 'voided-documents',
    loadChildren: 'app/organization/ui/document/voided-document/voided-documents.module#VoidedDocumentModule'
  },
  {
    path: 'summary-documents',
    loadChildren: 'app/organization/ui/document/summary-document/summary-documents.module#SummaryDocumentModule'
  },
  {
    path: ':document/send-events',
    component: DocumentSendEventsComponent,
    resolve: {
      document: DocumentResolverService
    }
  },
  {
    path: ':document/attached-documents',
    component: DocumentAttachedDocumentsComponent,
    resolve: {
      document: DocumentResolverService
    }
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    OrganizationComponentsModule,
    DocumentComponentsModule,

    SharedModule,
    CoreModule
  ],
  declarations: [
    DocumentAttachedDocumentsComponent,
    DocumentSendEventsComponent
  ],
  entryComponents: [],
  exports: [],
  providers: []
})
export class DocumentModule {
}
