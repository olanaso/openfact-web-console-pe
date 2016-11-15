import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RootOrganizationResolver } from './resolvers/root-organization-resolver';
import { SettingsOrganizationResolver } from './resolvers/settings-organization-resolver';

import { OrganizationComponent } from './organization.component';
import { OrganizationOverviewComponent } from './organization-overview/organization-overview.component';
import { OrganizationSettingsComponent } from './organization-settings/organization-settings.component';
import { OrganizationGeneralInformationComponent } from './organization-general-information/organization-general-information.component';
import { OrganizationAdditionalInformationComponent } from './organization-additional-information/organization-additional-information.component';
import { OrganizationKeySettingsComponent } from './organization-key-settings/organization-key-settings.component';
import { OrganizationSmtpSettingsComponent } from './organization-smtp-settings/organization-smtp-settings.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'organization/:organization',
                component: OrganizationComponent,
                resolve: {
                    organization: RootOrganizationResolver
                },
                children: [
                    {
                        path: '',
                        component: OrganizationOverviewComponent
                    },
                    {
                        path: 'settings',
                        component: OrganizationSettingsComponent,
                        children: [
                            {
                                path: '',
                                redirectTo: 'general-information'
                            },
                            {
                                path: 'general-information',
                                component: OrganizationGeneralInformationComponent,
                                resolve: {
                                    organization: SettingsOrganizationResolver
                                }
                            },
                            {
                                path: 'additional-information',
                                component: OrganizationAdditionalInformationComponent,
                                resolve: {
                                    organization: SettingsOrganizationResolver
                                }
                            },
                            {
                                path: 'key-settings',
                                component: OrganizationKeySettingsComponent,
                                resolve: {
                                    organization: SettingsOrganizationResolver
                                }
                            },
                            {
                                path: 'smtp-settings',
                                component: OrganizationSmtpSettingsComponent,
                                resolve: {
                                    organization: SettingsOrganizationResolver
                                }
                            }
                        ]
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class OrganizationRoutingModule { }