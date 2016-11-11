import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { OrganizationsCreateComponent } from './organizations-create/organizations-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NgbModule.forRoot(),
    SharedModule
  ],
  declarations: [
    AdminComponent,
    OrganizationsComponent,
    OrganizationsCreateComponent
  ]
})
export class AdminModule { }
