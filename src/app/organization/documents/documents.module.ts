import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents.component';
import { DocumentsRoutingModule } from './documents-routing.module';

import { DocumentContextService } from './documents-context.service';
import { TiposInvoiceResolver } from './resolvers/tipos-invoice.resolver';
import { TiposDocumentosIdentidadResolver } from './resolvers/tipos-documentos-identidad.resolver';
import { TiposIGVResolver } from './resolvers/tipos-igv.resolver';
import { IgvResolver } from './resolvers/igv.resolver';
import { InvoiceResolver } from './resolvers/invoice.resolver';

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule,
  ],
  declarations: [DocumentsComponent],
  providers: [
    DocumentContextService,
    IgvResolver,
    TiposIGVResolver,
    TiposDocumentosIdentidadResolver,
    TiposInvoiceResolver,
    InvoiceResolver
  ]
})
export class DocumentsModule { }
