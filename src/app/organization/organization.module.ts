// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Organization module
import { OrganizationComponent } from './organization.component';
import { OrganizationRoutingModule } from './organization-routing.module';

// Third modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import { TranslateModule } from 'ng2-translate';
import { FileUploadModule } from 'ng2-file-upload';

// Openfact modules
import { SharedModule } from '../shared/shared.module';

// Shared
import { RootOrganizationResolver } from './shared/root-organization-resolver';
import { SettingsOrganizationResolver } from './shared/settings-organization-resolver';
import { InvoiceResolver } from './shared/invoice-resolver';

// Components
import { OrganizationHeaderComponent } from './organization-header/organization-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OrganizationOverviewComponent } from './organization-overview/organization-overview.component';
import { OrganizationSettingsComponent } from './organization-settings/organization-settings.component';
import { OrganizationGeneralInformationComponent } from './organization-general-information/organization-general-information.component';
import { OrganizationAdditionalInformationComponent } from './organization-additional-information/organization-additional-information.component';
import { OrganizationKeySettingsComponent } from './organization-key-settings/organization-key-settings.component';
import { OrganizationSmtpSettingsComponent } from './organization-smtp-settings/organization-smtp-settings.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { CreateInvoiceFormComponent } from './create-invoice-form/create-invoice-form.component';
import { CreateInvoiceUploadComponent } from './create-invoice-upload/create-invoice-upload.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { InvoiceOverviewComponent } from './invoice-overview/invoice-overview.component';
import { InvoiceOverviewEventsComponent } from './invoice-overview-events/invoice-overview-events.component';
import { CreditNotesComponent } from './credit-notes/credit-notes.component';
import { CreditNoteOverviewComponent } from './credit-note-overview/credit-note-overview.component';
import { CreateCreditNoteComponent } from './create-credit-note/create-credit-note.component';
import { DebitNotesComponent } from './debit-notes/debit-notes.component';
import { DebitNoteOverviewComponent } from './debit-note-overview/debit-note-overview.component';
import { CreateDebitNoteComponent } from './create-debit-note/create-debit-note.component';

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

        // Openfact modules
        SharedModule
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
        OrganizationSmtpSettingsComponent,
        InvoicesComponent,
        InvoiceOverviewComponent,
        CreateInvoiceComponent,
        CreditNotesComponent,
        CreditNoteOverviewComponent,
        CreateCreditNoteComponent,
        DebitNotesComponent,
        DebitNoteOverviewComponent,
        CreateDebitNoteComponent,
        CreateInvoiceFormComponent,
        CreateInvoiceUploadComponent,
        InvoiceOverviewEventsComponent,
        EditInvoiceComponent
    ],
    providers: [
        // Shared
        RootOrganizationResolver,
        SettingsOrganizationResolver,
        InvoiceResolver
    ]

})
export class OrganizationModule { }
