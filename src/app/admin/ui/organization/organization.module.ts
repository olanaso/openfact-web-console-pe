import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponentsModule } from './../../components/components.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../../core/core.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../../shared/shared.module';
import { OrganizationsListComponent } from './list/list.component';
import { OrganizationsCreateComponent } from './create-page/create-page.component';

const routes: Routes = [
  {path: '', component: OrganizationsListComponent},
  {path: 'create', component: OrganizationsCreateComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AdminComponentsModule,

    SharedModule,
    CoreModule
  ],
  declarations: [
    OrganizationsListComponent,
    OrganizationsCreateComponent,
  ],
  entryComponents: [],
  exports: [
    OrganizationsListComponent
  ],
  providers: []
})
export class AdminOrganizationModule {
}
