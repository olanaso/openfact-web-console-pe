import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule}   from '@angular/common';
import {SharedModule} from '../shared';

import {organizationRouting} from './organization.routes';

import {OverviewComponent} from './overview';
import {CreateInvoiceComponent, ListInvoiceComponent} from './invoices';
import {SettingsComponent, GeneralInformationComponent, AddressComponent, TasksScheduleComponent} from './settings';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        organizationRouting
    ],
    declarations: [
        OverviewComponent,

        CreateInvoiceComponent,
        ListInvoiceComponent,

        SettingsComponent,
        GeneralInformationComponent,
        AddressComponent,
        TasksScheduleComponent
    ],
    providers: []
})

export class OrganizationModule {

}