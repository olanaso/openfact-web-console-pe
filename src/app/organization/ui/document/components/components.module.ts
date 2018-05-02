import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { CoreModule } from '../../../../core/core.module';
import { DocumentActionsComponent } from './document-actions/document-actions.component';
import { DocumentEditHeaderComponent } from './document-edit-header/document-edit-header.component';
import { DocumentEditRightSidebarComponent } from './document-edit-right-sidebar/document-edit-right-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    SharedModule,
    CoreModule
  ],
  declarations: [
    DocumentActionsComponent,
    DocumentEditHeaderComponent,
    DocumentEditRightSidebarComponent
  ],
  exports: [
    DocumentActionsComponent,
    DocumentEditHeaderComponent,
    DocumentEditRightSidebarComponent
  ],
})
export class DocumentComponentsModule {
}
