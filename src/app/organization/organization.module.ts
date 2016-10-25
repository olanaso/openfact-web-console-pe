import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrganizationRoutingModule } from './organization-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared';

import { OrganizationResolver } from './organization-resolver';
import { OrganizationComponent } from './organization.component';

import { DashboardComponent } from './dashboard';

import { InvoicesComponent } from './invoices';
import { CreateInvoiceComponent } from './invoices';
import { SearchInvoiceComponent } from './invoices';
import { OverviewInvoiceComponent } from './invoices';
import { SummaryInvoiceComponent } from './invoices';
import { CreateInvoiceDefaultComponent } from './invoices/create-invoice/create-invoice-default/create-invoice-default.component';
import { CreateInvoicePeComponent } from './invoices/create-invoice/create-invoice-pe/create-invoice-pe.component';

import { CreditnotesComponent, CreateCreditnoteComponent, SearchCreditnoteComponent } from './creditnotes';
import { DebitnotesComponent, CreateDebitnoteComponent, SearchDebitnoteComponent } from './debitnotes';

import { OrganizationSettingsResolver } from './settings';
import { SettingsComponent } from './settings';
import { GeneralInformationComponent } from './settings';
import { AdditionalInformationComponent } from './settings';
import { OrganizationSmtpServerComponent } from './settings';
import { OrganizationUblServerComponent } from './settings';
import { OrganizationKeysComponent } from './settings';
import { OrganizationThemesComponent } from './settings';

import { InvoiceResolver } from './utils';
import { OrganizationTasksComponent } from './settings/organization-tasks/organization-tasks.component';

import { EventsComponent } from './events/events.component';
import { EventsConfigComponent } from './events/events-config/events-config.component';
import { AdminEventsComponent } from './events/admin-events/admin-events.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OrganizationRoutingModule,
        NgbModule.forRoot(),
        SharedModule
    ],
    declarations: [
        OrganizationComponent,
        SettingsComponent,
        DashboardComponent,
        InvoicesComponent,
        CreateInvoiceComponent,
        SearchInvoiceComponent,
        OverviewInvoiceComponent,
        CreditnotesComponent,
        CreateCreditnoteComponent,
        SearchCreditnoteComponent,
        DebitnotesComponent,
        CreateDebitnoteComponent,
        SearchDebitnoteComponent,
        SummaryInvoiceComponent,
        GeneralInformationComponent,
        AdditionalInformationComponent,
        OrganizationKeysComponent,
        OrganizationThemesComponent,
        OrganizationUblServerComponent,
        OrganizationSmtpServerComponent,
        OrganizationTasksComponent,
        EventsComponent,
        EventsConfigComponent,
        AdminEventsComponent,
        CreateInvoicePeComponent,
        CreateInvoiceDefaultComponent,
    ],
    providers: [
        OrganizationResolver,
        OrganizationSettingsResolver,
        InvoiceResolver
    ]
})
export class OrganizationModule { }