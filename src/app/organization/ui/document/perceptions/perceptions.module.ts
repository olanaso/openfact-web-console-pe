import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { OrganizationComponentsModule } from '../../../components/components.module';
import { DocumentComponentsModule } from '../components/components.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CoreModule } from '../../../../core/core.module';
import { PerceptionEditComponent } from './perception-edit/perception-edit.component';
import { PerceptionCreateComponent } from './perception-create/perception-create.component';
import { PerceptionListComponent } from './perception-list/perception-list.component';
import {
  DocumentosRelacionadosPercepcionResolverService,
  MonedasResolverService, TiposDocumentoEntidadResolverService,
  TiposRegimenPercepcionResolverService
} from '../../../../core/resolvers/generic-type-resolver.service';
import { DocumentResolverService } from '../../../../core/resolvers/document-resolver.service';

const routes: Routes = [
  {
    path: '', component: PerceptionListComponent
  },
  {
    path: 'create', component: PerceptionCreateComponent,
    resolve: {
      tiposRegimenPercepcion: TiposRegimenPercepcionResolverService,
      documentosRelacionadosPercepcion: DocumentosRelacionadosPercepcionResolverService,
      tiposDocumentEntidad: TiposDocumentoEntidadResolverService,
      monedas: MonedasResolverService
    },
  },
  {
    path: ':document', component: PerceptionEditComponent,
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
    PerceptionListComponent,
    PerceptionCreateComponent,
    PerceptionEditComponent,
  ],
  entryComponents: [],
  exports: [],
  providers: []
})
export class PerceptionModule {
}
