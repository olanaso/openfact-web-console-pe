import { ComponentConfigComponent } from './settings/component-config/component-config.component';
import { CreditNoteCreateComponent } from './documents/credit-notes/credit-note-create/credit-note-create.component';
import { CreditNoteEditComponent } from './documents/credit-notes/credit-note-edit/credit-note-edit.component';
import { CreditNoteEditOverviewComponent } from './documents/credit-notes/credit-note-edit-overview/credit-note-edit-overview.component';
import { CreditNoteListComponent } from './documents/credit-notes/credit-note-list/credit-note-list.component';
import { CreditNoteUploadComponent } from './documents/credit-notes/credit-note-upload/credit-note-upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DebitNoteCreateComponent } from './documents/debit-notes/debit-note-create/debit-note-create.component';
import { DebitNoteEditComponent } from './documents/debit-notes/debit-note-edit/debit-note-edit.component';
import { DebitNoteEditOverviewComponent } from './documents/debit-notes/debit-note-edit-overview/debit-note-edit-overview.component';
import { DebitNoteListComponent } from './documents/debit-notes/debit-note-list/debit-note-list.component';
import { DebitNoteUploadComponent } from './documents/debit-notes/debit-note-upload/debit-note-upload.component';
import { DocumentAttachedDocumentsComponent } from './documents/document-attached-documents/document-attached-documents.component';
import { DocumentSendEventsComponent } from './documents/document-send-events/document-send-events.component';
import { InvoiceCreateComponent } from './documents/invoices/invoice-create/invoice-create.component';
import { InvoiceEditComponent } from './documents/invoices/invoice-edit/invoice-edit.component';
import { InvoiceEditOverviewComponent } from './documents/invoices/invoice-edit-overview/invoice-edit-overview.component';
import { InvoiceListComponent } from './documents/invoices/invoice-list/invoice-list.component';
import { InvoiceUploadComponent } from './documents/invoices/invoice-upload/invoice-upload.component';
import { NgModule } from '@angular/core';
import { OrganizationComponent } from './organization.component';
import { OrganizationHeaderComponent } from './organization-header/organization-header.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationSidebarComponent } from './organization-sidebar/organization-sidebar.component';
import { SettingsActiveKeyComponent } from './settings/settings-active-key/settings-active-key.component';
import { SettingsAdditionalInformationComponent } from './settings/settings-additional-information/settings-additional-information.component';
import { SettingsAllKeysComponent } from './settings/settings-all-keys/settings-all-keys.component';
import { SettingsGeneralInformationComponent } from './settings/settings-general-information/settings-general-information.component';
import { SettingsGenericKeystoreComponent } from './settings/settings-generic-keystore/settings-generic-keystore.component';
import { SettingsKeyProvidersComponent } from './settings/settings-key-providers/settings-key-providers.component';
import { SettingsSmtpComponent } from './settings/settings-smtp/settings-smtp.component';
import { SettingsTabsetComponent } from './settings/settings-tabset/settings-tabset.component';
import { SettingsTasksComponent } from './settings/settings-tasks/settings-tasks.component';
import { SettingsThemeComponent } from './settings/settings-theme/settings-theme.component';
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
    DebitNoteUploadComponent,
    InvoiceEditComponent,
    InvoiceEditOverviewComponent,
    DocumentSendEventsComponent,
    DocumentAttachedDocumentsComponent,
    CreditNoteEditComponent,
    DebitNoteEditComponent,
    DebitNoteEditOverviewComponent,
    CreditNoteEditOverviewComponent
  ]
})
export class OrganizationModule { }
