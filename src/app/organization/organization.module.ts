import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrganizationRoutingModule } from './organization-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared';

import { OrganizationComponent } from './organization.component';
import { DashboardComponent } from './dashboard';
import { SettingsComponent } from './settings';
import { InvoicesComponent, CreateInvoiceComponent, SearchInvoiceComponent } from './invoices';
import { CreditnotesComponent, CreateCreditnoteComponent, SearchCreditnoteComponent } from './creditnotes';
import { DebitnotesComponent, CreateDebitnoteComponent, SearchDebitnoteComponent } from './debitnotes';

import { OrganizationResolver } from './utils';


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
        CreditnotesComponent,
        CreateCreditnoteComponent,
        SearchCreditnoteComponent,
        DebitnotesComponent,
        CreateDebitnoteComponent,
        SearchDebitnoteComponent,
    ],
    providers: [
        OrganizationResolver
    ]
})
export class OrganizationModule { }