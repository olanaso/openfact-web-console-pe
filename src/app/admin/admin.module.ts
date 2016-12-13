// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Admin module
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

// Third modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import { TranslateModule } from 'ng2-translate';
import { FileUploadModule } from 'ng2-file-upload';
import { SelectModule } from 'ng2-select';
import { TextMaskModule } from 'angular2-text-mask';

// Openfact modules
import { SharedModule } from '../shared/shared.module';

// Components
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { ServerInfoProvidersComponent } from './server-info-providers/server-info-providers.component';

@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,

    // Third modules
    NgbModule.forRoot(),
    MomentModule,
    TranslateModule,
    FileUploadModule,
    SelectModule,
    TextMaskModule,

    // Openfact modules
    SharedModule
  ],
  declarations: [
    // Components
    AdminComponent,
    AdminHeaderComponent,
    OrganizationsComponent,
    CreateOrganizationComponent,
    ServerInfoComponent,
    ServerInfoProvidersComponent
  ]
})
export class AdminModule { }
