import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { ComponentsModule } from '../components/components.module';
import { ServicesModule } from '../services/services.module';
import { SharedModule } from '../shared/shared.module';

import { RootOrganizationResolver } from './resolvers/root-organization-resolver';
import { SettingsOrganizationResolver } from './resolvers/settings-organization-resolver';
import { InvoiceResolver } from './resolvers/invoice-resolver';

import { OrganizationComponent } from './organization.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationOverviewComponent } from './organization-overview/organization-overview.component';
import { OrganizationSettingsComponent } from './organization-settings/organization-settings.component';
import { OrganizationGeneralInformationComponent } from './organization-general-information/organization-general-information.component';
import { OrganizationAdditionalInformationComponent } from './organization-additional-information/organization-additional-information.component';
import { OrganizationKeySettingsComponent } from './organization-key-settings/organization-key-settings.component';
import { OrganizationSmtpSettingsComponent } from './organization-smtp-settings/organization-smtp-settings.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceOverviewComponent } from './invoice-overview/invoice-overview.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { CreateInvoiceFormComponent } from './create-invoice-form/create-invoice-form.component';
import { CreateInvoiceUploadComponent } from './create-invoice-upload/create-invoice-upload.component';
import { CreditNotesComponent } from './credit-notes/credit-notes.component';
import { CreditNoteOverviewComponent } from './credit-note-overview/credit-note-overview.component';
import { CreateCreditNoteComponent } from './create-credit-note/create-credit-note.component';
import { DebitNotesComponent } from './debit-notes/debit-notes.component';
import { DebitNoteOverviewComponent } from './debit-note-overview/debit-note-overview.component';
import { CreateDebitNoteComponent } from './create-debit-note/create-debit-note.component';
import { InvoiceOverviewSummaryComponent } from './invoice-overview-summary/invoice-overview-summary.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        OrganizationRoutingModule,
        NgbModule.forRoot(),
        FileUploadModule,
        ComponentsModule,
        ServicesModule,
        SharedModule
    ],
    declarations: [
        OrganizationComponent,
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
        InvoiceOverviewSummaryComponent
    ],
    providers: [
        RootOrganizationResolver,
        SettingsOrganizationResolver,
        InvoiceResolver
    ]

})
export class OrganizationModule { }
