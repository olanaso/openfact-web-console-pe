import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule}   from '@angular/common';
import {SharedModule} from '../shared';

import {organizationRouting} from './organization.routes';

import {OrganizationComponent} from './organization.component';
import {OverviewComponent} from './overview';
import {InvoicesComponent, CreateInvoiceComponent, ListInvoiceComponent} from './invoices';
import {SettingsComponent, GeneralInformationComponent, AddressComponent, CertificateComponent, TasksScheduleComponent} from './settings';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        organizationRouting
    ],
    declarations: [
        OrganizationComponent,
        OverviewComponent,        

        InvoicesComponent,
        //CreateInvoiceComponent,
        ListInvoiceComponent,
       
        SettingsComponent, 
        GeneralInformationComponent,
        AddressComponent, 
        CertificateComponent, 
        TasksScheduleComponent
    ],
    providers: []
})

export class OrganizationModule {

}
