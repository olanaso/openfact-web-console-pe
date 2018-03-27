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
        path: '_general-information',
        loadChildren: './general-information/general-information.module#GeneralInformationModule',
      },
      {
        path: '_additional-information',
        loadChildren: './additional-information/additional-information.module#AdditionalInformationModule',
      },
      {
        path: '_smtp-settings',
        loadChildren: './smtp/smtp.module#SmtpModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
