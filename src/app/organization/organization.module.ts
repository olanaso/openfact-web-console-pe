// Angular modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Organization module
import {OrganizationComponent} from './organization.component';
import {OrganizationRoutingModule} from './organization-routing.module';

// Third modules
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MomentModule} from 'angular2-moment';
import {TranslateModule} from 'ng2-translate';
import {FileUploadModule} from 'ng2-file-upload';
import {SelectModule} from 'ng2-select';
import {TextMaskModule} from 'angular2-text-mask';

// Openfact modules
import {SharedModule} from '../shared/shared.module';

// Shared

// Components
import {OrganizationHeaderComponent} from './organization-header/organization-header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {OrganizationOverviewComponent} from './organization-overview/organization-overview.component';
import {OrganizationSettingsComponent} from './organization-settings/organization-settings.component';
import {OrganizationGeneralInformationComponent} from './organization-general-information/organization-general-information.component';
import {OrganizationAdditionalInformationComponent} from './organization-additional-information/organization-additional-information.component';
import {OrganizationKeySettingsComponent} from './organization-key-settings/organization-key-settings.component';
import {OrganizationKeyActiveSettingsComponent} from './organization-key-active-settings/organization-key-active-settings.component';
import {OrganizationAllKeysSettingsComponent} from './organization-all-keys-settings/organization-all-keys-settings.component';
import {OrganizationKeyProvidersSettingsComponent} from './organization-key-providers-settings/organization-key-providers-settings.component';
import {OrganizationGenericKeystoreComponent} from './organization-generic-keystore/organization-generic-keystore.component';
import {OrganizationSmtpSettingsComponent} from './organization-smtp-settings/organization-smtp-settings.component';
import {ComponentConfigComponent} from './component-config/component-config.component';

import {InvoicesComponent} from './invoices/invoices.component';
import {CreateInvoiceComponent} from './create-invoice/create-invoice.component';
import {CreateInvoiceFormComponent} from './create-invoice-form/create-invoice-form.component';
import {CreateInvoiceFormConfirmModalComponent} from './create-invoice-form/create-invoice-form-confirm-modal.component';
import {CreateInvoiceUploadComponent} from './create-invoice-upload/create-invoice-upload.component';
import {EditInvoiceComponent} from './edit-invoice/edit-invoice.component';
import {InvoiceOverviewComponent} from './invoice-overview/invoice-overview.component';
import {InvoiceOverviewEventsComponent} from './invoice-overview-events/invoice-overview-events.component';
import {InvoiceSendEventsComponent} from './invoice-send-events/invoice-send-events.component';

import {CreditNotesComponent} from './credit-notes/credit-notes.component';
import {CreateCreditNoteComponent} from './create-credit-note/create-credit-note.component';
import {CreateCreditNoteFormComponent} from './create-credit-note-form/create-credit-note-form.component';
import {CreateCreditNoteUploadComponent} from './create-credit-note-upload/create-credit-note-upload.component';
import {EditCreditNoteComponent} from './edit-credit-note/edit-credit-note.component';
import {CreditNoteOverviewComponent} from './credit-note-overview/credit-note-overview.component';

import {DebitNotesComponent} from './debit-notes/debit-notes.component';
import {CreateDebitNoteComponent} from './create-debit-note/create-debit-note.component';
import {CreateDebitNoteFormComponent} from './create-debit-note-form/create-debit-note-form.component';
import {CreateDebitNoteUploadComponent} from './create-debit-note-upload/create-debit-note-upload.component';
import {EditDebitNoteComponent} from './edit-debit-note/edit-debit-note.component';
import {DebitNoteOverviewComponent} from './debit-note-overview/debit-note-overview.component';


import {PerceptionsComponent} from './perceptions/perceptions.component';
import {CreatePerceptionComponent} from './create-perception/create-perception.component';
import {CreatePerceptionFormComponent} from './create-perception-form/create-perception-form.component';
import {CreatePerceptionUploadComponent} from './create-perception-upload/create-perception-upload.component';
import {CreatePerceptionFormConfirmModalComponent} from './create-perception-form/create-perception-form-confirm-modal.component';
import {EditPerceptionComponent} from './edit-perception/edit-perception.component';
import {PerceptionOverviewComponent} from './perception-overview/perception-overview.component';
import {PerceptionOverviewEventsComponent} from './perception-overview-events/perception-overview-events.component';
import {PerceptionSendEventsComponent} from './perception-send-events/perception-send-events.component';

import {RetentionsComponent} from './retentions/retentions.component';
import {CreateRetentionComponent} from './create-retention/create-retention.component';
import {CreateRetentionFormComponent} from './create-retention-form/create-retention-form.component';
import {CreateRetentionUploadComponent} from './create-retention-upload/create-retention-upload.component';
import {CreateRetentionFormConfirmModalComponent} from './create-retention-form/create-retention-form-confirm-modal.component';
import {EditRetentionComponent} from './edit-retention/edit-retention.component';
import {RetentionOverviewComponent} from './retention-overview/retention-overview.component';
import {RetentionOverviewEventsComponent} from './retention-overview-events/retention-overview-events.component';
import {RetentionSendEventsComponent} from './retention-send-events/retention-send-events.component';

import {EventsComponent} from './events/events.component';
import {AdminEventsComponent} from './admin-events/admin-events.component';
import {EventsSettingsComponent} from './events-settings/events-settings.component';

@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Organization module
    OrganizationRoutingModule,

    // Third modules
    NgbModule.forRoot(),
    MomentModule,
    TranslateModule,
    FileUploadModule,
    SelectModule,
    TextMaskModule,

    // Openfact modules
    SharedModule,
  ],
  declarations: [
    // Components
    OrganizationComponent,
    OrganizationHeaderComponent,
    SidebarComponent,
    OrganizationOverviewComponent,
    OrganizationSettingsComponent,
    OrganizationGeneralInformationComponent,
    OrganizationAdditionalInformationComponent,
    OrganizationKeySettingsComponent,
    OrganizationKeyActiveSettingsComponent,
    OrganizationAllKeysSettingsComponent,
    OrganizationKeyProvidersSettingsComponent,
    OrganizationGenericKeystoreComponent,
    OrganizationSmtpSettingsComponent,
    ComponentConfigComponent,

    InvoicesComponent,
    CreateInvoiceComponent,
    CreateInvoiceFormComponent,
    CreateInvoiceFormConfirmModalComponent,
    CreateInvoiceUploadComponent,
    EditInvoiceComponent,
    InvoiceOverviewComponent,
    InvoiceOverviewEventsComponent,
    InvoiceSendEventsComponent,

    CreditNotesComponent,
    CreateCreditNoteComponent,
    CreateCreditNoteFormComponent,
    CreateCreditNoteUploadComponent,
    EditCreditNoteComponent,
    CreditNoteOverviewComponent,

    DebitNotesComponent,
    CreateDebitNoteComponent,
    CreateDebitNoteFormComponent,
    CreateDebitNoteUploadComponent,
    EditDebitNoteComponent,
    DebitNoteOverviewComponent,

    PerceptionsComponent,
    CreatePerceptionComponent,
    CreatePerceptionFormComponent,
    CreatePerceptionUploadComponent,
    CreatePerceptionFormConfirmModalComponent,
    EditPerceptionComponent,
    PerceptionOverviewComponent,
    PerceptionOverviewEventsComponent,
    PerceptionSendEventsComponent,

    RetentionsComponent,
    CreateRetentionComponent,
    CreateRetentionFormComponent,
    CreateRetentionFormConfirmModalComponent,
    CreateRetentionUploadComponent,
    EditRetentionComponent,
    RetentionOverviewComponent,
    RetentionOverviewEventsComponent,
    RetentionSendEventsComponent,

    EventsComponent,
    AdminEventsComponent,
    EventsSettingsComponent,
  ],
  entryComponents: [
    CreateInvoiceFormConfirmModalComponent,
    CreatePerceptionFormConfirmModalComponent,
    CreateRetentionFormConfirmModalComponent
  ],
  providers: [
    // Shared
  ]

})
export class OrganizationModule {
}
