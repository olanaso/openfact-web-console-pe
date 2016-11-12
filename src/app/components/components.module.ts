import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';

import { AlertsComponent } from './alerts/alerts.component';
import { AlertComponent } from './alerts/alert.component';
import { ButtonDeleteComponent } from './button-delete/button-delete.component';
import { ButtonSaveComponent } from './button-save/button-save.component';
import { ButtonSwitchComponent } from './button-switch/button-switch.component';
import { ButtonUploadFileComponent } from './button-upload-file/button-upload-file.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { LabelsComponent } from './labels/labels.component';
import { OrganizationHeaderComponent } from './organization-header/organization-header.component';
import { RelativeTimestampComponent } from './relative-timestamp/relative-timestamp.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import { AlertService } from './alerts/alert.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MomentModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AlertsComponent,
    AlertComponent,
    ButtonDeleteComponent,
    ButtonSaveComponent,
    ButtonSwitchComponent,
    ButtonUploadFileComponent,
    DefaultHeaderComponent,
    LabelsComponent,
    OrganizationHeaderComponent,
    RelativeTimestampComponent,
    SidebarComponent,
  ],
  exports: [
    AlertsComponent,
    AlertComponent,
    ButtonDeleteComponent,
    ButtonSaveComponent,
    ButtonSwitchComponent,
    ButtonUploadFileComponent,
    DefaultHeaderComponent,
    LabelsComponent,
    OrganizationHeaderComponent,
    RelativeTimestampComponent,
    SidebarComponent
  ],
  providers: [
    AlertService
  ]
})
export class ComponentsModule { }
