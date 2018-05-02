import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { OrganizationComponentsModule } from '../../../components/components.module';
import { DocumentComponentsModule } from '../components/components.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CoreModule } from '../../../../core/core.module';
import { SummaryDocumentEditComponent } from './summary-document-edit/summary-document-edit.component';
import { SummaryDocumentListComponent } from './summary-document-list/summary-document-list.component';
import { DocumentResolverService } from '../../../../core/resolvers/document-resolver.service';

const routes: Routes = [
  {
    path: '', component: SummaryDocumentListComponent
  },
  {
    path: ':document', component: SummaryDocumentEditComponent,
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
    SummaryDocumentListComponent,
    SummaryDocumentEditComponent,
  ],
  entryComponents: [],
  exports: [],
  providers: []
})
export class SummaryDocumentModule {
}
