import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule}   from '@angular/common';
import {SharedModule} from '../shared';

import {organizationRouting} from './organization.routes';

import {OverviewComponent} from './overview';
import {SettingsComponent, GeneralInformationComponent, AddressComponent} from './settings';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        organizationRouting
    ],
    declarations: [
        OverviewComponent,
        SettingsComponent,
        GeneralInformationComponent,
        AddressComponent
    ],
    providers: []
})

export class OrganizationModule {

}