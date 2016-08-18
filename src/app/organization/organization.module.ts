import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule}   from '@angular/common';
import {SharedModule} from '../shared';

import {organizationRouting} from './organization.routes';

import {OrganizationComponent} from './organization.component';
import {OverviewComponent} from './overview';
import {InvoicesComponent, CreateInvoiceComponent, ListInvoiceComponent} from './invoices';
import {SettingsComponent, GeneralInformationComponent, AddressComponent, CertificateComponent, TasksScheduleComponent} from './settings';
import {TaxTypesComponent, ListTaxTypesComponent, CreateTaxTypeComponent, EditTaxTypeComponent} from './settings';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        organizationRouting
    ],
    declarations: [
        OverviewComponent,

        OrganizationComponent,

        InvoicesComponent,
        CreateInvoiceComponent,
        ListInvoiceComponent,
       
        SettingsComponent, 
        GeneralInformationComponent, 
        AddressComponent, 
        CertificateComponent, 
        TasksScheduleComponent,
        TaxTypesComponent, ListTaxTypesComponent, CreateTaxTypeComponent, EditTaxTypeComponent
    ],
    providers: []
})

export class OrganizationModule {

}