import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { OrganizationComponentsModule } from '../../../components/components.module';
import { DocumentComponentsModule } from '../components/components.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CoreModule } from '../../../../core/core.module';
import { VoidedDocumentCreateComponent } from './voided-document-create/voided-document-create.component';
import { VoidedDocumentEditComponent } from './voided-document-edit/voided-document-edit.component';
import { VoidedDocumentListComponent } from './voided-document-list/voided-document-list.component';
import { DocumentosRelacionadosBajasResolverService } from '../../../../core/resolvers/generic-type-resolver.service';
import { DocumentResolverService } from '../../../../core/resolvers/document-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: VoidedDocumentListComponent
  },
  {
    path: 'create',
    component: VoidedDocumentCreateComponent,
    resolve: {
      documentosRelacionadosVoid: DocumentosRelacionadosBajasResolverService,
    }
  },
  {
    path: ':document',
    component: VoidedDocumentEditComponent,
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
    VoidedDocumentListComponent,
    VoidedDocumentCreateComponent,
    VoidedDocumentEditComponent,
  ],
  entryComponents: [],
  exports: [],
  providers: []
})
export class VoidedDocumentModule {
}
