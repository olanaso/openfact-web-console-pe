import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../components/components.module';
import { ServicesModule } from '../services/services.module';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { ServerInfoProvidersComponent } from './server-info-providers/server-info-providers.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NgbModule.forRoot(),
    ComponentsModule,
    ServicesModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    OrganizationsComponent,
    CreateOrganizationComponent,
    ServerInfoComponent,
    ServerInfoProvidersComponent
  ]
})
export class AdminModule { }
