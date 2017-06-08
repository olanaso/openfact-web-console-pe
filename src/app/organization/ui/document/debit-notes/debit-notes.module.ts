import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { OrganizationComponentsModule } from '../../../components/components.module';
import { DocumentComponentsModule } from '../components/components.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CoreModule } from '../../../../core/core.module';
import { DebitNoteCreateComponent } from './debit-note-create/debit-note-create.component';
import { DebitNoteEditComponent } from './debit-note-edit/debit-note-edit.component';
import { DebitNoteListComponent } from './debit-note-list/debit-note-list.component';
import {
  TiposDocumentoEntidadResolverService,
  TiposNotaDebitoResolverService,
  TiposAfectacionIGVResolverService, IgvResolverService
} from '../../../../core/resolvers/generic-type-resolver.service';
import { DocumentResolverService } from 'app/core/resolvers/document-resolver.service';

const routes: Routes = [
  {
    path: '', component: DebitNoteListComponent
  },
  {
    path: 'create', component: DebitNoteCreateComponent,
    resolve: {
      tiposNotaDebito: TiposNotaDebitoResolverService,
      tiposDocumentEntidad: TiposDocumentoEntidadResolverService,
      tiposDeAfectacionIgv: TiposAfectacionIGVResolverService,
      igv: IgvResolverService
    }
  },
  {
    path: ':document', component: DebitNoteEditComponent,
    resolve: {
      document: DocumentResolverService
    }
  }
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
    DebitNoteListComponent,
    DebitNoteCreateComponent,
    DebitNoteEditComponent,
  ],
  entryComponents: [],
  exports: [],
  providers: []
})
export class DebitNoteModule {
}
