import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Admin module
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

// Third modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Openfact modules
import { ComponentsModule } from '../components/components.module';
import { ServicesModule } from '../services/services.module';
import { SharedModule } from '../shared/shared.module';

import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { ServerInfoProvidersComponent } from './server-info-providers/server-info-providers.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
    AdminHeaderComponent,
    OrganizationsComponent,
    CreateOrganizationComponent,
    ServerInfoComponent,
    ServerInfoProvidersComponent
  ]
})
export class AdminModule { }
