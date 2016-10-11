import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';

import { DashboardComponent } from './dashboard';
import { SettingsComponent } from './settings';

@NgModule({
    imports: [
        CommonModule,
        OrganizationRoutingModule
    ],
    declarations: [
        SettingsComponent,
        DashboardComponent,
    ]
})
export class OrganizationModule { }