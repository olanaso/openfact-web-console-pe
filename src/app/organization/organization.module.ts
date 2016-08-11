import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule}   from '@angular/common';
import {SharedModule} from '../shared';

import {organizationRouting} from './organization.routes';

import {OverviewComponent} from './overview';
import {SettingsComponent} from './settings';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        organizationRouting
    ],
    declarations: [
        OverviewComponent,
        SettingsComponent
    ],
    providers: []
})

export class OrganizationModule {

}