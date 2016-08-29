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


import {HttpModule} from '@angular/http';
import {TranslateModule} from 'ng2-translate/ng2-translate';
import {TranslateService, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        organizationRouting,
        HttpModule,
        TranslateModule.forRoot()
    ],
    exports: [ HttpModule, TranslateModule],
    declarations: [
        OrganizationComponent,
        OverviewComponent,        
   
        InvoicesComponent,
        //CreateInvoiceComponent,
        ListInvoiceComponent,
       
        SettingsComponent, 
        GeneralInformationComponent,
        AddressComponent, 
        //CertificateComponent, 
        TasksScheduleComponent
    ],
    providers: []
})

export class OrganizationModule {

}
