import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';

import { SharedComponent } from './shared.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AlertComponent } from './components/alerts/alert/alert.component';
import { ButtonDeleteComponent } from './components/button-delete/button-delete.component';
import { ButtonSaveComponent } from './components/button-save/button-save.component';
import { ButtonSwitchComponent } from './components/button-switch/button-switch.component';
import { ButtonUploadFileComponent } from './components/button-upload-file/button-upload-file.component';
import { DefaultHeaderComponent } from './components/default-header/default-header.component';
import { LabelsComponent } from './components/labels/labels.component';
import { OrganizationHeaderComponent } from './components/organization-header/organization-header.component';
import { RelativeTimestampComponent } from './components/relative-timestamp/relative-timestamp.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterCollectionPipe } from './pipes/filter-collection.pipe';

import { KeysPipe } from './pipes/keys.pipe';
import { YesNoPipe } from './pipes/yes-no.pipe';

import { AlertService } from './components/alerts/services/alert.service';
import { Restangular } from './services/restangular';
import { RestangularOpenfact } from './services/restangular-openfact';
import { DataService } from './services/data.service';
import { OrganizationService } from './services/organization.service';
import { InvoiceService } from './services/invoice.service';
import { CreditnoteService } from './services/creditnote.service';
import { DebitnoteService } from './services/debitnote.service';
import { ServerInfoService } from './services/server-info.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    MomentModule
  ],
  declarations: [
    SharedComponent,
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
    CapitalizePipe,
    FilterCollectionPipe,
    KeysPipe,
    YesNoPipe,
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
    SidebarComponent,
    CapitalizePipe,
    FilterCollectionPipe,
    KeysPipe,
    YesNoPipe,
  ],
  providers: [
    AlertService,
    Restangular,
    RestangularOpenfact,
    DataService,
    OrganizationService,
    InvoiceService,
    CreditnoteService,
    DebitnoteService,
    ServerInfoService,
  ]
})
export class SharedModule { }
