import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrganizationRoutingModule } from './organization-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared';

import { OrganizationResolver } from './organization-resolver';
import { OrganizationComponent } from './organization.component';

import { DashboardComponent } from './dashboard';

import { InvoicesComponent, CreateInvoiceComponent, SearchInvoiceComponent, OverviewInvoiceComponent, SummaryInvoiceComponent } from './invoices';
import { CreditnotesComponent, CreateCreditnoteComponent, SearchCreditnoteComponent } from './creditnotes';
import { DebitnotesComponent, CreateDebitnoteComponent, SearchDebitnoteComponent } from './debitnotes';

import { OrganizationSettingsResolver } from './settings';
import { SettingsComponent, GeneralInformationComponent, AdditionalInformationComponent, OrganizationSmtpServerComponent, OrganizationUblServerComponent, OrganizationKeysComponent, OrganizationThemesComponent } from './settings';

import { InvoiceResolver } from './utils';

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
    ],
    providers: [
        OrganizationResolver,
        OrganizationSettingsResolver,
        InvoiceResolver
    ]
})
export class OrganizationModule { }