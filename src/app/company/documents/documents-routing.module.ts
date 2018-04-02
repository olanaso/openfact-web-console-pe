import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentsComponent } from './documents.component';

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
        path: '_newinvoice',
        loadChildren: './new-invoice/new-invoice.module#NewInvoiceModule',
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
