import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentsComponent } from './documents.component';
import { ContextResolver } from './../../shared/context-resolver.service';

import { TiposInvoiceResolver } from './resolvers/tipos-invoice.resolver';
import { TiposDocumentosIdentidadResolver } from './resolvers/tipos-documentos-identidad.resolver';
import { TiposIGVResolver } from './resolvers/tipos-igv.resolver';
import { IgvResolver } from './resolvers/igv.resolver';

const routes: Routes = [
  {
    path: '',
    component: DocumentsComponent,
    children: [
      {
        path: '',
        redirectTo: '_search',
        pathMatch: 'full'
      },
      {
        path: '_search',
        loadChildren: './search/search.module#SearchModule',
      },
      {
        path: '_invoice',
        loadChildren: './invoice/invoice.module#InvoiceModule',
        resolve: {
          tiposInvoice: TiposInvoiceResolver,
          tiposDocumentosIdentidad: TiposDocumentosIdentidadResolver,
          tiposIGV: TiposIGVResolver,
          IGV: IgvResolver
        }
      },
      {
        path: '_invoice/:document',
        resolve: {
          context: ContextResolver
        },
        loadChildren: './invoice/invoice.module#InvoiceModule',
      },
      {
        path: '_newcreditnote',
        loadChildren: './new-creditnote/new-creditnote.module#NewCreditnoteModule',
      },
      {
        path: '_newdebitnote',
        loadChildren: './new-debitnote/new-debitnote.module#NewDebitnoteModule',
      },
      {
        path: '_new-perception',
        loadChildren: './new-perception/new-perception.module#NewPerceptionModule',
      },
      {
        path: '_new-retention',
        loadChildren: './new-retention/new-retention.module#NewRetentionModule',
      },
      {
        path: '_new-voideddocument',
        loadChildren: './new-voideddocument/new-voideddocument.module#NewVoideddocumentModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
