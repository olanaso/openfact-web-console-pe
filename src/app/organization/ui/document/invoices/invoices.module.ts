import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { InvoiceEditComponent } from './invoice-edit/invoice-edit.component';
import { OrganizationComponentsModule } from '../../../components/components.module';
import { DocumentComponentsModule } from '../components/components.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CoreModule } from '../../../../core/core.module';
import {
  TiposComprobantePagoResolverService,
  TiposDocumentoEntidadResolverService,
  TiposAfectacionIGVResolverService, IgvResolverService
} from '../../../../core/resolvers/generic-type-resolver.service';
import { DocumentResolverService } from '../../../../core/resolvers/document-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: InvoiceListComponent
  },
  {
    path: 'create',
    component: InvoiceCreateComponent,
    resolve: {
      tiposComprobantePago: TiposComprobantePagoResolverService,
      tiposDocumentEntidad: TiposDocumentoEntidadResolverService,
      tiposDeAfectacionIgv: TiposAfectacionIGVResolverService,
      igv: IgvResolverService
    }
  },
  {
    path: ':document',
    component: InvoiceEditComponent,
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
    InvoiceListComponent,
    InvoiceCreateComponent,
    InvoiceEditComponent,
  ],
  entryComponents: [],
  exports: [],
  providers: []
})
export class InvoiceModule {
}
