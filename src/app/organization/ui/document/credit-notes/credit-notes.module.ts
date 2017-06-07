import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { OrganizationComponentsModule } from '../../../components/components.module';
import { DocumentComponentsModule } from '../components/components.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CoreModule } from '../../../../core/core.module';
import { CreditNoteCreateComponent } from './credit-note-create/credit-note-create.component';
import { CreditNoteEditComponent } from './credit-note-edit/credit-note-edit.component';
import { CreditNoteListComponent } from './credit-note-list/credit-note-list.component';
import {
  IgvResolverService, TiposAfectacionIGVResolverService, TiposDocumentoEntidadResolverService,
  TiposNotaCreditoResolverService
} from '../../../../core/resolvers/generic-type-resolver.service';
import { DocumentResolverService } from '../../../../core/resolvers/document-resolver.service';

const routes: Routes = [
  {
    path: '', component: CreditNoteListComponent
  },
  {
    path: 'create', component: CreditNoteCreateComponent,
    resolve: {
      tiposNotaCredito: TiposNotaCreditoResolverService,
      tiposDocumentEntidad: TiposDocumentoEntidadResolverService,
      tiposDeAfectacionIgv: TiposAfectacionIGVResolverService,
      igv: IgvResolverService
    }
  },
  {
    path: ':document', component: CreditNoteEditComponent,
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
    CreditNoteListComponent,
    CreditNoteCreateComponent,
    CreditNoteEditComponent,
  ],
  entryComponents: [],
  exports: [],
  providers: []
})
export class CreditNoteModule {
}
