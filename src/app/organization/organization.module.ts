import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrganizationRoutingModule } from './organization-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../components/components.module';
import { ServicesModule } from '../services/services.module';
import { SharedModule } from '../shared/shared.module';

import { RootOrganizationResolver } from './resolvers/root-organization-resolver';

import { OrganizationComponent } from './organization.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralInformationSettingsComponent } from './general-information-settings/general-information-settings.component';
import { AdditionalInformationSettingsComponent } from './additional-information-settings/additional-information-settings.component';
import { KeysSettingsComponent } from './keys-settings/keys-settings.component';
import { SmtpServerSettingsComponent } from './smtp-server-settings/smtp-server-settings.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceOverviewComponent } from './invoice-overview/invoice-overview.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { CreateCreditNoteComponent } from './create-credit-note/create-credit-note.component';
import { CreateDebitNoteComponent } from './create-debit-note/create-debit-note.component';
import { CreditNotesComponent } from './credit-notes/credit-notes.component';
import { DebitNotesComponent } from './debit-notes/debit-notes.component';
import { DebitNoteOverviewComponent } from './debit-note-overview/debit-note-overview.component';
import { CreditNoteOverviewComponent } from './credit-note-overview/credit-note-overview.component';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrganizationRoutingModule,
    NgbModule.forRoot(),
    ComponentsModule,
    ServicesModule,
    SharedModule
  ],
  declarations: [
    OrganizationComponent,
    DashboardComponent,
    GeneralInformationSettingsComponent,
    AdditionalInformationSettingsComponent,
    KeysSettingsComponent,
    SmtpServerSettingsComponent,
    InvoicesComponent,
    InvoiceOverviewComponent,
    CreateInvoiceComponent,
    CreateCreditNoteComponent,
    CreateDebitNoteComponent,
    CreditNotesComponent,
    DebitNotesComponent,
    DebitNoteOverviewComponent,
    CreditNoteOverviewComponent
  ],
  providers: [
    RootOrganizationResolver
  ]
})
export class OrganizationModule { }
