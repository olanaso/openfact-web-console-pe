import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { NgModule } from '@angular/core';
import { OrganizationContentComponent } from './organization-content/organization-content.component';
import { OrganizationHeaderComponent } from './organization-header/organization-header.component';
import { OrganizationSidebarComponent } from './organization-sidebar/organization-sidebar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    SharedModule,
    CoreModule
  ],
  declarations: [
    OrganizationHeaderComponent,
    OrganizationSidebarComponent,
    OrganizationContentComponent
  ],
  exports: [
    OrganizationHeaderComponent,
    OrganizationSidebarComponent,
    OrganizationContentComponent
  ],
})
export class OrganizationComponentsModule {
}
