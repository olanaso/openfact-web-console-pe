import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule}   from '@angular/common';

import {ListOrganizationComponent} from './list-organization';
import {CreateOrganizationComponent} from './create-organization';
import {OverviewComponent} from './edit-organization/overview';
import {SettingsComponent} from './edit-organization/settings';
//import {InvoicesComponent} from './invoices';
import {GeneralInformationComponent} from './edit-organization/settings/general-information';
import {AddressComponent} from './edit-organization/settings/address';

import {organizationsRouting} from './organization.routes';

@NgModule({
    declarations: [
        ListOrganizationComponent,
        CreateOrganizationComponent,
        OverviewComponent,
        SettingsComponent, GeneralInformationComponent, AddressComponent
    ],
    imports: [
        organizationsRouting,

        CommonModule,
        FormsModule     
    ],
    providers: []
})

export class OrganizationModule {

}