import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrganizationResolver } from '../core/resolvers/organization-resolver';
import { EventsConfigResolver } from '../core/resolvers/events-config-resolver';
import { ServerInfoResolver } from '../core/resolvers/server-info-resolver';
import { OrganizationKeysResolver } from '../core/resolvers/organization-keys-resolver';
import { OrganizationComponentResolver } from '../core/resolvers/organization-component-resolver';

import { InvoiceResolver } from '../core/resolvers/invoice-resolver';
import { InvoiceJsonResolver } from '../core/resolvers/invoice-json-resolver';
import { InvoiceTextResolver } from '../core/resolvers/invoice-text-resolver';
import { CreditNoteResolver } from '../core/resolvers/credit-note-resolver';
import { DebitNoteResolver } from '../core/resolvers/debit-note-resolver';

import { OrganizationComponent } from './organization.component';
import { OrganizationOverviewComponent } from './organization-overview/organization-overview.component';
import { OrganizationSettingsComponent } from './organization-settings/organization-settings.component';
import { OrganizationGeneralInformationComponent } from './organization-general-information/organization-general-information.component';
import { OrganizationAdditionalInformationComponent } from './organization-additional-information/organization-additional-information.component';
import { OrganizationKeySettingsComponent } from './organization-key-settings/organization-key-settings.component';
import { OrganizationKeyActiveSettingsComponent } from './organization-key-active-settings/organization-key-active-settings.component';
import { OrganizationAllKeysSettingsComponent } from './organization-all-keys-settings/organization-all-keys-settings.component';
import { OrganizationKeyProvidersSettingsComponent } from './organization-key-providers-settings/organization-key-providers-settings.component';
import { OrganizationGenericKeystoreComponent } from './organization-generic-keystore/organization-generic-keystore.component';
import { OrganizationSmtpSettingsComponent } from './organization-smtp-settings/organization-smtp-settings.component';

import { InvoicesComponent } from './invoices/invoices.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { CreateInvoiceFormComponent } from './create-invoice-form/create-invoice-form.component';
import { CreateInvoiceUploadComponent } from './create-invoice-upload/create-invoice-upload.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { InvoiceOverviewComponent } from './invoice-overview/invoice-overview.component';
import { InvoiceOverviewEventsComponent } from './invoice-overview-events/invoice-overview-events.component';
import { InvoiceSendEventsComponent } from './invoice-send-events/invoice-send-events.component';

import { CreditNotesComponent } from './credit-notes/credit-notes.component';
import { CreateCreditNoteComponent } from './create-credit-note/create-credit-note.component';
import { CreateCreditNoteFormComponent } from './create-credit-note-form/create-credit-note-form.component';
import { CreateCreditNoteUploadComponent } from './create-credit-note-upload/create-credit-note-upload.component';
import { EditCreditNoteComponent } from './edit-credit-note/edit-credit-note.component';
import { CreditNoteOverviewComponent } from './credit-note-overview/credit-note-overview.component';

import { DebitNotesComponent } from './debit-notes/debit-notes.component';
import { CreateDebitNoteComponent } from './create-debit-note/create-debit-note.component';
import { CreateDebitNoteFormComponent } from './create-debit-note-form/create-debit-note-form.component';
import { CreateDebitNoteUploadComponent } from './create-debit-note-upload/create-debit-note-upload.component';
import { EditDebitNoteComponent } from './edit-debit-note/edit-debit-note.component';
import { DebitNoteOverviewComponent } from './debit-note-overview/debit-note-overview.component';

import { EventsComponent } from './events/events.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { EventsSettingsComponent } from './events-settings/events-settings.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: OrganizationComponent,
                resolve: {
                    organization: OrganizationResolver
                },
                children: [
                    {
                        path: '',
                        component: OrganizationOverviewComponent,
                        resolve: {
                            organization: OrganizationResolver
                        }
                    },
                    {
                        path: 'invoices',
                        children: [
                            {
                                path: '',
                                component: InvoicesComponent,
                                resolve: {
                                    organization: OrganizationResolver
                                }
                            },
                            {
                                path: 'create',
                                component: CreateInvoiceComponent,
                                resolve: {
                                    organization: OrganizationResolver
                                },
                                children: [
                                    {
                                        path: '',
                                        component: CreateInvoiceFormComponent,
                                        resolve: {
                                            organization: OrganizationResolver
                                        }
                                    },
                                    {
                                        path: 'upload',
                                        component: CreateInvoiceUploadComponent,
                                        resolve: {
                                            organization: OrganizationResolver
                                        }
                                    }                                    
                                ]
                            },
                            {
                                path: ':invoice',
                                component: EditInvoiceComponent,
                                resolve: {
                                    organization: OrganizationResolver,
                                    invoice: InvoiceResolver
                                },
                                children: [
                                    {
                                        path: '',
                                        component: InvoiceOverviewComponent,
                                        resolve: {
                                            organization: OrganizationResolver,
                                            invoice: InvoiceResolver,
                                            invoiceJson: InvoiceJsonResolver
                                        }
                                    },
                                    {
                                        path: 'send-events',
                                        component: InvoiceSendEventsComponent,
                                        resolve: {
                                            organization: OrganizationResolver,
                                            invoice: InvoiceResolver
                                        }
                                    },
                                    {
                                        path: 'events',
                                        component: InvoiceOverviewEventsComponent,
                                        resolve: {
                                            organization: OrganizationResolver,
                                            invoice: InvoiceResolver
                                        }
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
                                component: CreditNotesComponent,
                                resolve: {
                                    organization: OrganizationResolver
                                }
                            },
                            {
                                path: 'create',
                                component: CreateCreditNoteComponent,
                                resolve: {
                                    organization: OrganizationResolver
                                },
                                children: [
                                    {
                                        path: '',
                                        component: CreateCreditNoteFormComponent,
                                        resolve: {
                                            organization: OrganizationResolver
                                        }
                                    },
                                    {
                                        path: 'upload',
                                        component: CreateCreditNoteUploadComponent,
                                        resolve: {
                                            organization: OrganizationResolver
                                        }
                                    }
                                ]
                            },
                            {
                                path: ':creditNote',
                                component: EditCreditNoteComponent,
                                resolve: {
                                    organization: OrganizationResolver,
                                    creditNote: CreditNoteResolver
                                },
                                children: [
                                    {
                                        path: '',
                                        component: CreditNoteOverviewComponent,
                                        resolve: {
                                            organization: OrganizationResolver,
                                            creditNote: CreditNoteResolver
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'debit-notes',
                        children: [
                            {
                                path: '',
                                component: DebitNotesComponent,
                                resolve: {
                                    organization: OrganizationResolver
                                }
                            },
                            {
                                path: 'create',
                                component: CreateDebitNoteComponent,
                                resolve: {
                                    organization: OrganizationResolver
                                },
                                children: [
                                    {
                                        path: '',
                                        component: CreateDebitNoteFormComponent,
                                        resolve: {
                                            organization: OrganizationResolver
                                        }
                                    },
                                    {
                                        path: 'upload',
                                        component: CreateDebitNoteUploadComponent,
                                        resolve: {
                                            organization: OrganizationResolver
                                        }
                                    }
                                ]
                            },
                            {
                                path: ':debitNote',
                                component: EditDebitNoteComponent,
                                resolve: {
                                    organization: OrganizationResolver,
                                    debitNote: DebitNoteResolver
                                },
                                children: [
                                    {
                                        path: '',
                                        component: DebitNoteOverviewComponent,
                                        resolve: {
                                            organization: OrganizationResolver,
                                            debitNote: DebitNoteResolver
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'settings',
                        component: OrganizationSettingsComponent,
                        resolve: {
                            organization: OrganizationResolver
                        },
                        children: [
                            {
                                path: '',
                                component: OrganizationGeneralInformationComponent,
                                resolve: {
                                    organization: OrganizationResolver
                                }
                            },
                            {
                                path: 'additional-information',
                                component: OrganizationAdditionalInformationComponent,
                                resolve: {
                                    organization: OrganizationResolver
                                }
                            },
                            {
                                path: 'keys',
                                component: OrganizationKeySettingsComponent,
                                children: [
                                    {
                                        path: '',
                                        component: OrganizationKeyActiveSettingsComponent,
                                        resolve: {
                                            organization: OrganizationResolver,
                                            keys: OrganizationKeysResolver
                                        }
                                    },
                                    {
                                        path: 'list',
                                        component: OrganizationAllKeysSettingsComponent,
                                        resolve: {
                                            organization: OrganizationResolver,
                                            keys: OrganizationKeysResolver
                                        }
                                    },
                                    {
                                        path: 'providers',
                                        children: [
                                            {
                                                path: '',
                                                component: OrganizationKeyProvidersSettingsComponent,
                                                resolve: {
                                                    organization: OrganizationResolver,
                                                    serverinfo: ServerInfoResolver
                                                }
                                            },
                                            {
                                                path: ':provider',
                                                component: OrganizationGenericKeystoreComponent,
                                                resolve: {
                                                    organization: OrganizationResolver,
                                                    serverinfo: ServerInfoResolver
                                                }
                                            },
                                            {
                                                path: ':provider/:component',
                                                component: OrganizationGenericKeystoreComponent,
                                                resolve: {
                                                    organization: OrganizationResolver,
                                                    serverinfo: ServerInfoResolver,
                                                    instance: OrganizationComponentResolver
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                path: 'smtp-settings',
                                component: OrganizationSmtpSettingsComponent,
                                resolve: {
                                    organization: OrganizationResolver
                                }
                            }
                        ]
                    },
                    {
                        path: 'events',
                        component: EventsComponent,
                        children: [
                            {
                                path: '',
                                component: AdminEventsComponent,
                                resolve: {
                                    organization: OrganizationResolver,
                                    serverinfo: ServerInfoResolver
                                }
                            },
                            {
                                path: 'events-settings',
                                component: EventsSettingsComponent,
                                resolve: {
                                    organization: OrganizationResolver,
                                    serverinfo: ServerInfoResolver,
                                    eventsConfig: EventsConfigResolver
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
