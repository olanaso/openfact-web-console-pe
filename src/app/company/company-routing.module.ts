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
        redirectTo: '_documents',
        pathMatch: 'full'
      },
      {
        path: '_documents',
        loadChildren: './documents/documents.module#DocumentsModule',
      },
      {
        path: '_drafts',
        loadChildren: './draft-documents/draft-documents.module#DraftDocumentsModule',
      },
      {
        path: '_generalinformation',
        loadChildren: './general-information/general-information.module#GeneralInformationModule',
      },
      {
        path: '_additionalinformation',
        loadChildren: './additional-information/additional-information.module#AdditionalInformationModule',
      },
      {
        path: '_smtp',
        loadChildren: './smtp/smtp.module#SmtpModule',
      },
      {
        path: '_keys',
        loadChildren: './keys/keys.module#KeysModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
