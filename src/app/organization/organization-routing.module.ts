import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RootOrganizationResolver } from './resolvers/root-organization-resolver';
import { SettingsOrganizationResolver } from './resolvers/settings-organization-resolver';
import { InvoiceResolver } from './resolvers/invoice-resolver';

import { OrganizationComponent } from './organization.component';
import { OrganizationOverviewComponent } from './organization-overview/organization-overview.component';
import { OrganizationSettingsComponent } from './organization-settings/organization-settings.component';
import { OrganizationGeneralInformationComponent } from './organization-general-information/organization-general-information.component';
import { OrganizationAdditionalInformationComponent } from './organization-additional-information/organization-additional-information.component';
import { OrganizationKeySettingsComponent } from './organization-key-settings/organization-key-settings.component';
import { OrganizationSmtpSettingsComponent } from './organization-smtp-settings/organization-smtp-settings.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceOverviewComponent } from './invoice-overview/invoice-overview.component';
import { InvoiceOverviewSummaryComponent } from './invoice-overview-summary/invoice-overview-summary.component';
import { InvoiceOverviewEventsComponent } from './invoice-overview-events/invoice-overview-events.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { CreateInvoiceFormComponent } from './create-invoice-form/create-invoice-form.component';
import { CreateInvoiceUploadComponent } from './create-invoice-upload/create-invoice-upload.component';
import { CreditNotesComponent } from './credit-notes/credit-notes.component';
import { CreditNoteOverviewComponent } from './credit-note-overview/credit-note-overview.component';
import { CreateCreditNoteComponent } from './create-credit-note/create-credit-note.component';
import { DebitNotesComponent } from './debit-notes/debit-notes.component';
import { DebitNoteOverviewComponent } from './debit-note-overview/debit-note-overview.component';
import { CreateDebitNoteComponent } from './create-debit-note/create-debit-note.component';

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
                    },
                    {
                        path: 'invoices',
                        children: [
                            {
                                path: '',
                                component: InvoicesComponent
                            },
                            {
                                path: ':invoice',
                                component: InvoiceOverviewComponent,
                                resolve: {
                                    invoice: InvoiceResolver
                                },
                                children: [
                                    {
                                        path: '',
                                        redirectTo: 'overview'
                                    },
                                    {
                                        path: 'overview',
                                        component: InvoiceOverviewSummaryComponent
                                    },
                                    {
                                        path: 'events',
                                        component: InvoiceOverviewEventsComponent
                                    }
                                ]
                            },
                            {
                                path: 'create',
                                component: CreateInvoiceComponent,
                                children: [
                                    {
                                        path: '',
                                        component: CreateInvoiceFormComponent
                                    },
                                    {
                                        path: 'upload',
                                        component: CreateInvoiceUploadComponent
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'credit-notes',
                        children: [
                            {
                                path: '',
                                component: CreditNotesComponent
                            },
                            {
                                path: 'overview',
                                component: CreditNoteOverviewComponent,
                            },
                            {
                                path: 'create',
                                component: CreateCreditNoteComponent
                            }
                        ]
                    },
                    {
                        path: 'debit-notes',
                        children: [
                            {
                                path: '',
                                component: DebitNotesComponent
                            },
                            {
                                path: 'overview',
                                component: DebitNoteOverviewComponent,
                            },
                            {
                                path: 'create',
                                component: CreateDebitNoteComponent
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