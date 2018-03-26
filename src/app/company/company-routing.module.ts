import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent } from './company.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      {
        path: '',
        loadChildren: './documents/documents.module#DocumentsModule',
      },
      {
        path: '_drafts',
        loadChildren: './draft-documents/draft-documents.module#DraftDocumentsModule',
      },
      {
        path: '_settings',
        loadChildren: './settings/settings.module#SettingsModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
