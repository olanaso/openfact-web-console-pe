import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { OrganizationComponentsModule } from '../../../components/components.module';
import { DocumentComponentsModule } from '../components/components.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CoreModule } from '../../../../core/core.module';
import { RetentionEditComponent } from './retention-edit/retention-edit.component';
import { RetentionCreateComponent } from './retention-create/retention-create.component';
import { RetentionListComponent } from './retention-list/retention-list.component';
import { DocumentResolverService } from 'app/core/resolvers/document-resolver.service';
import {
  DocumentosRelacionadosRetencionResolverService,
  MonedasResolverService,
  TiposDocumentoEntidadResolverService, TiposRegimenRetencionResolverService
} from '../../../../core/resolvers/generic-type-resolver.service';

const routes: Routes = [
  {
    path: '', component: RetentionListComponent
  },
  {
    path: 'create', component: RetentionCreateComponent,
    resolve: {
      tiposRegimenRetencion: TiposRegimenRetencionResolverService,
      documentosRelacionadosRetencion: DocumentosRelacionadosRetencionResolverService,
      tiposDocumentEntidad: TiposDocumentoEntidadResolverService,
      monedas: MonedasResolverService
    }
  },
  {
    path: ':document', component: RetentionEditComponent,
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
    RetentionListComponent,
    RetentionCreateComponent,
    RetentionEditComponent,
  ],
  entryComponents: [],
  exports: [],
  providers: []
})
export class RetentionModule {
}
