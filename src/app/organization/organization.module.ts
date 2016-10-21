import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrganizationRoutingModule } from './organization-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared';

import { OrganizationComponent } from './organization.component';
import { DashboardComponent } from './dashboard';
import { SettingsComponent } from './settings';
import { InvoicesComponent, CreateInvoiceComponent, SearchInvoiceComponent, OverviewInvoiceComponent, SummaryInvoiceComponent } from './invoices';
import { CreditnotesComponent, CreateCreditnoteComponent, SearchCreditnoteComponent } from './creditnotes';
import { DebitnotesComponent, CreateDebitnoteComponent, SearchDebitnoteComponent } from './debitnotes';

import { OrganizationResolver, InvoiceResolver } from './utils';
import { GeneralInformationComponent, AdditionalInformationComponent, EmailComponent, OrganizationKeysComponent } from './settings';

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
        EmailComponent,
        AdditionalInformationComponent,
        OrganizationKeysComponent,
    ],
    providers: [
        OrganizationResolver,
        InvoiceResolver
    ]
})
export class OrganizationModule { }