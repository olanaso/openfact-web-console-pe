import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { AboutComponent } from './about/about.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { OrganizationCreateComponent } from './organizations/organization-create/organization-create.component';
import { OrganizationListComponent } from './organizations/organization-list/organization-list.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { ServerInfoProvidersComponent } from './server-info/server-info-providers/server-info-providers.component';
import { ServerInfoGeneralComponent } from './server-info/server-info-general/server-info-general.component';

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
    AboutComponent,
    OrganizationsComponent,
    OrganizationCreateComponent,
    OrganizationListComponent,
    ServerInfoComponent,
    ServerInfoProvidersComponent,
    ServerInfoGeneralComponent
  ]
})
export class AdminModule { }
