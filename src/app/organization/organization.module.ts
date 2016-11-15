import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../components/components.module';
import { ServicesModule } from '../services/services.module';
import { SharedModule } from '../shared/shared.module';

import { RootOrganizationResolver } from './resolvers/root-organization-resolver';
import { SettingsOrganizationResolver } from './resolvers/settings-organization-resolver';

import { OrganizationComponent } from './organization.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationOverviewComponent } from './organization-overview/organization-overview.component';
import { OrganizationSettingsComponent } from './organization-settings/organization-settings.component';
import { OrganizationGeneralInformationComponent } from './organization-general-information/organization-general-information.component';
import { OrganizationAdditionalInformationComponent } from './organization-additional-information/organization-additional-information.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OrganizationRoutingModule,
        NgbModule.forRoot(),
        ComponentsModule,
        ServicesModule,
        SharedModule
    ],
    declarations: [
        OrganizationComponent,
        OrganizationOverviewComponent,
        OrganizationSettingsComponent,
        OrganizationGeneralInformationComponent,
        OrganizationAdditionalInformationComponent
    ],
    providers: [
        RootOrganizationResolver,
        SettingsOrganizationResolver
    ]

})
export class OrganizationModule { }
