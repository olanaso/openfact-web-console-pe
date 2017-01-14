import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrganizationResolver } from '../core/resolvers/organization-resolver';
import { EventsConfigResolver } from '../core/resolvers/events-config-resolver';
import { ServerInfoResolver } from '../core/resolvers/server-info-resolver';
import { OrganizationKeysResolver } from '../core/resolvers/organization-keys-resolver';
import { OrganizationComponentResolver } from '../core/resolvers/organization-component-resolver';

import { InvoiceResolver } from '../core/resolvers/invoice-resolver';
import { CreditNoteResolver } from '../core/resolvers/credit-note-resolver';
import { DebitNoteResolver } from '../core/resolvers/debit-note-resolver';
import { PerceptionResolver } from '../core/resolvers/perception-resolver';
import { PerceptionJsonResolver } from '../core/resolvers/perception-json-resolver';
import { PerceptionTextResolver } from '../core/resolvers/perception-text-resolver';
import { RetentionResolver } from '../core/resolvers/retention-resolver';
import { RetentionJsonResolver } from '../core/resolvers/retention-json-resolver';
import { RetentionTextResolver } from '../core/resolvers/retention-text-resolver';
import { VoidedResolver } from '../core/resolvers/voided-resolver';
import { VoidedJsonResolver } from '../core/resolvers/voided-json-resolver';
import { VoidedTextResolver } from '../core/resolvers/voided-text-resolver';

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
import { OrganizationTasksComponent } from './organization-tasks/organization-tasks.component';
import { OrganizationThemesComponent } from './organization-themes/organization-themes.component';

import { InvoicesComponent } from './invoices/invoices.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { CreateInvoiceFormComponent } from './create-invoice-form/create-invoice-form.component';
import { CreateInvoiceUploadComponent } from './create-invoice-upload/create-invoice-upload.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { InvoiceOverviewComponent } from './invoice-overview/invoice-overview.component';
import { InvoiceSendEventsComponent } from './invoice-send-events/invoice-send-events.component';
import { InvoiceAttatchedDocumentsComponent } from './invoice-attatched-documents/invoice-attatched-documents.component';

import { CreditNotesComponent } from './credit-notes/credit-notes.component';
import { CreateCreditNoteComponent } from './create-credit-note/create-credit-note.component';
import { CreateCreditNoteFormComponent } from './create-credit-note-form/create-credit-note-form.component';
import { CreateCreditNoteUploadComponent } from './create-credit-note-upload/create-credit-note-upload.component';
import { EditCreditNoteComponent } from './edit-credit-note/edit-credit-note.component';
import { CreditNoteOverviewComponent } from './credit-note-overview/credit-note-overview.component';
import { CreditNoteSendEventsComponent } from './credit-note-send-events/credit-note-send-events.component';
import { CreditNoteAttatchedDocumentsComponent } from './credit-note-attatched-documents/credit-note-attatched-documents.component';

import { DebitNotesComponent } from './debit-notes/debit-notes.component';
import { CreateDebitNoteComponent } from './create-debit-note/create-debit-note.component';
import { CreateDebitNoteFormComponent } from './create-debit-note-form/create-debit-note-form.component';
import { CreateDebitNoteUploadComponent } from './create-debit-note-upload/create-debit-note-upload.component';
import { EditDebitNoteComponent } from './edit-debit-note/edit-debit-note.component';
import { DebitNoteOverviewComponent } from './debit-note-overview/debit-note-overview.component';
import { DebitNoteSendEventsComponent } from './debit-note-send-events/debit-note-send-events.component';
import { DebitNoteAttatchedDocumentsComponent } from './debit-note-attatched-documents/debit-note-attatched-documents.component';

import { PerceptionsComponent } from './perceptions/perceptions.component';
import { CreatePerceptionComponent } from './create-perception/create-perception.component';
import { CreatePerceptionFormComponent } from './create-perception-form/create-perception-form.component';
import { CreatePerceptionUploadComponent } from './create-perception-upload/create-perception-upload.component';
import { EditPerceptionComponent } from './edit-perception/edit-perception.component';
import { PerceptionOverviewComponent } from './perception-overview/perception-overview.component';
import { PerceptionOverviewEventsComponent } from './perception-overview-events/perception-overview-events.component';
import { PerceptionSendEventsComponent } from './perception-send-events/perception-send-events.component';

import { RetentionsComponent } from './retentions/retentions.component';
import { CreateRetentionComponent } from './create-retention/create-retention.component';
import { CreateRetentionFormComponent } from './create-retention-form/create-retention-form.component';
import { CreateRetentionUploadComponent } from './create-retention-upload/create-retention-upload.component';
import { EditRetentionComponent } from './edit-retention/edit-retention.component';
import { RetentionOverviewComponent } from './retention-overview/retention-overview.component';
import { RetentionOverviewEventsComponent } from './retention-overview-events/retention-overview-events.component';
import { RetentionSendEventsComponent } from './retention-send-events/retention-send-events.component';

import { VoidedsComponent } from './voideds/voideds.component';
import { CreateVoidedComponent } from './create-voided/create-voided.component';
import { CreateVoidedFormComponent } from './create-voided-form/create-voided-form.component';
import { CreateVoidedUploadComponent } from './create-voided-upload/create-voided-upload.component';
import { EditVoidedComponent } from './edit-voided/edit-voided.component';
import { VoidedOverviewComponent } from './voided-overview/voided-overview.component';
import { VoidedOverviewEventsComponent } from './voided-overview-events/voided-overview-events.component';
import { VoidedSendEventsComponent } from './voided-send-events/voided-send-events.component';

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
                      invoice: InvoiceResolver
                    }
                  },
                  {
                    path: 'send-events',
                    component: InvoiceSendEventsComponent,
                    resolve: {
                      invoice: InvoiceResolver
                    }
                  },
                  {
                    path: 'attatched-documents',
                    component: InvoiceAttatchedDocumentsComponent,
                    resolve: {
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
                      creditNote: CreditNoteResolver
                    }
                  },
                  {
                    path: 'send-events',
                    component: CreditNoteSendEventsComponent,
                    resolve: {
                      creditNote: CreditNoteResolver
                    }
                  },
                  {
                    path: 'attatched-documents',
                    component: CreditNoteAttatchedDocumentsComponent,
                    resolve: {
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
                      debitNote: DebitNoteResolver
                    }
                  },
                  {
                    path: 'send-events',
                    component: DebitNoteSendEventsComponent,
                    resolve: {
                      debitNote: DebitNoteResolver
                    }
                  },
                  {
                    path: 'attatched-documents',
                    component: DebitNoteAttatchedDocumentsComponent,
                    resolve: {
                      debitNote: DebitNoteResolver
                    }
                  }
                ]
              }
            ]
          },
          {
            path: 'perceptions',
            children: [
              {
                path: '',
                component: PerceptionsComponent,
                resolve: {
                  organization: OrganizationResolver
                }
              },
              {
                path: 'create',
                component: CreatePerceptionComponent,
                resolve: {
                  organization: OrganizationResolver
                },
                children: [
                  {
                    path: '',
                    component: CreatePerceptionFormComponent,
                    resolve: {
                      organization: OrganizationResolver
                    }
                  },
                  {
                    path: 'upload',
                    component: CreatePerceptionUploadComponent,
                    resolve: {
                      organization: OrganizationResolver
                    }
                  }
                ]
              },
              {
                path: ':perception',
                component: EditPerceptionComponent,
                resolve: {
                  organization: OrganizationResolver,
                  perception: PerceptionResolver
                },
                children: [
                  {
                    path: '',
                    component: PerceptionOverviewComponent,
                    resolve: {
                      organization: OrganizationResolver,
                      perception: PerceptionResolver,
                      perceptionJson: PerceptionJsonResolver,
                      perceptionText: PerceptionTextResolver
                    }
                  },
                  {
                    path: 'send-events',
                    component: PerceptionSendEventsComponent,
                    resolve: {
                      organization: OrganizationResolver,
                      perception: PerceptionResolver
                    }
                  },
                  {
                    path: 'events',
                    component: PerceptionOverviewEventsComponent,
                    resolve: {
                      organization: OrganizationResolver,
                      perception: PerceptionResolver
                    }
                  }
                ]
              }
            ]
          },
          {
            path: 'retentions',
            children: [
              {
                path: '',
                component: RetentionsComponent,
                resolve: {
                  organization: OrganizationResolver
                }
              },
              {
                path: 'create',
                component: CreateRetentionComponent,
                resolve: {
                  organization: OrganizationResolver
                },
                children: [
                  {
                    path: '',
                    component: CreateRetentionFormComponent,
                    resolve: {
                      organization: OrganizationResolver
                    }
                  },
                  {
                    path: 'upload',
                    component: CreateRetentionUploadComponent,
                    resolve: {
                      organization: OrganizationResolver
                    }
                  }
                ]
              },
              {
                path: ':retention',
                component: EditRetentionComponent,
                resolve: {
                  organization: OrganizationResolver,
                  retention: RetentionResolver
                },
                children: [
                  {
                    path: '',
                    component: RetentionOverviewComponent,
                    resolve: {
                      organization: OrganizationResolver,
                      retention: RetentionResolver,
                      retentionJson: RetentionJsonResolver,
                      retentionText: RetentionTextResolver
                    }
                  },
                  {
                    path: 'send-events',
                    component: RetentionSendEventsComponent,
                    resolve: {
                      organization: OrganizationResolver,
                      retention: RetentionResolver
                    }
                  },
                  {
                    path: 'events',
                    component: RetentionOverviewEventsComponent,
                    resolve: {
                      organization: OrganizationResolver,
                      retention: RetentionResolver
                    }
                  }
                ]
              }
            ]
          },
          {
            path: 'voideds',
            children: [
              {
                path: '',
                component: VoidedsComponent,
                resolve: {
                  organization: OrganizationResolver
                }
              },
              {
                path: 'create',
                component: CreateVoidedComponent,
                resolve: {
                  organization: OrganizationResolver
                },
                children: [
                  {
                    path: '',
                    component: CreateVoidedFormComponent,
                    resolve: {
                      organization: OrganizationResolver
                    }
                  },
                  {
                    path: 'upload',
                    component: CreateVoidedUploadComponent,
                    resolve: {
                      organization: OrganizationResolver
                    }
                  }
                ]
              },
              {
                path: ':voided',
                component: EditVoidedComponent,
                resolve: {
                  organization: OrganizationResolver,
                  voided: VoidedResolver
                },
                children: [
                  {
                    path: '',
                    component: VoidedOverviewComponent,
                    resolve: {
                      organization: OrganizationResolver,
                      voided: VoidedResolver,
                      voidedJson: VoidedJsonResolver,
                      voidedText: VoidedTextResolver
                    }
                  },
                  {
                    path: 'send-events',
                    component: VoidedSendEventsComponent,
                    resolve: {
                      organization: OrganizationResolver,
                      voided: VoidedResolver
                    }
                  },
                  {
                    path: 'events',
                    component: VoidedOverviewEventsComponent,
                    resolve: {
                      organization: OrganizationResolver,
                      voided: VoidedResolver
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
              },
              {
                path: 'theme-settings',
                component: OrganizationThemesComponent,
                resolve: {
                  organization: OrganizationResolver,
                  serverinfo: ServerInfoResolver
                }
              },
              {
                path: 'tasks-settings',
                component: OrganizationTasksComponent,
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
export class OrganizationRoutingModule {
}
