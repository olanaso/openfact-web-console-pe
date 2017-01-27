import { ComponentConfigComponent } from './component-config/component-config.component';
import { CreditNoteCreateComponent } from './credit-note-create/credit-note-create.component';
import { CreditNoteListComponent } from './credit-note-list/credit-note-list.component';
import { CreditNoteUploadComponent } from './credit-note-upload/credit-note-upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DebitNoteCreateComponent } from './debit-note-create/debit-note-create.component';
import { DebitNoteListComponent } from './debit-note-list/debit-note-list.component';
import { DebitNoteUploadComponent } from './debit-note-upload/debit-note-upload.component';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceUploadComponent } from './invoice-upload/invoice-upload.component';
import { NgModule } from '@angular/core';
import { OrganizationComponent } from './organization.component';
import { OrganizationHeaderComponent } from './organization-header/organization-header.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationSidebarComponent } from './organization-sidebar/organization-sidebar.component';
import { SettingsActiveKeyComponent } from './settings-active-key/settings-active-key.component';
import { SettingsAdditionalInformationComponent } from './settings-additional-information/settings-additional-information.component';
import { SettingsAllKeysComponent } from './settings-all-keys/settings-all-keys.component';
import { SettingsGeneralInformationComponent } from './settings-general-information/settings-general-information.component';
import { SettingsGenericKeystoreComponent } from './settings-generic-keystore/settings-generic-keystore.component';
import { SettingsKeyProvidersComponent } from './settings-key-providers/settings-key-providers.component';
import { SettingsSmtpComponent } from './settings-smtp/settings-smtp.component';
import { SettingsTabsetComponent } from './settings-tabset/settings-tabset.component';
import { SettingsTasksComponent } from './settings-tasks/settings-tasks.component';
import { SettingsThemeComponent } from './settings-theme/settings-theme.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OrganizationRoutingModule
  ],
  declarations: [
    OrganizationComponent,
    OrganizationHeaderComponent,
    OrganizationSidebarComponent,
    SettingsGeneralInformationComponent,
    SettingsAdditionalInformationComponent,
    SettingsSmtpComponent,
    SettingsThemeComponent,
    SettingsTasksComponent,
    DashboardComponent,
    SettingsTabsetComponent,
    SettingsSmtpComponent,
    SettingsActiveKeyComponent,
    SettingsAllKeysComponent,
    SettingsKeyProvidersComponent,
    SettingsGenericKeystoreComponent,
    ComponentConfigComponent,
    InvoiceListComponent,
    CreditNoteListComponent,
    DebitNoteListComponent,
    InvoiceCreateComponent,
    CreditNoteCreateComponent,
    DebitNoteCreateComponent,
    InvoiceUploadComponent,
    CreditNoteUploadComponent,
    DebitNoteUploadComponent
  ]
})
export class OrganizationModule { }
