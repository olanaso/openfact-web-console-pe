import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrganizationRoutingModule } from './organization-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared';

import { OrganizationComponent } from './organization.component';
import { DashboardComponent } from './dashboard';
import { SettingsComponent } from './settings';

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
        DashboardComponent
    ]
})
export class OrganizationModule { }