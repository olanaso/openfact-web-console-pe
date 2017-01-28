import { RouterModule, Routes } from '@angular/router';

import { CreditNoteCreateComponent } from './documents/credit-notes/credit-note-create/credit-note-create.component';
import { CreditNoteEditComponent } from './documents/credit-notes/credit-note-edit/credit-note-edit.component';
import { CreditNoteEditOverviewComponent } from './documents/credit-notes/credit-note-edit-overview/credit-note-edit-overview.component';
import { CreditNoteListComponent } from './documents/credit-notes/credit-note-list/credit-note-list.component';
import { CreditNoteUploadComponent } from './documents/credit-notes/credit-note-upload/credit-note-upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DebitNoteCreateComponent } from './documents/debit-notes/debit-note-create/debit-note-create.component';
import { DebitNoteEditComponent } from './documents/debit-notes/debit-note-edit/debit-note-edit.component';
import { DebitNoteEditOverviewComponent } from './documents/debit-notes/debit-note-edit-overview/debit-note-edit-overview.component';
import { DebitNoteListComponent } from './documents/debit-notes/debit-note-list/debit-note-list.component';
import { DebitNoteUploadComponent } from './documents/debit-notes/debit-note-upload/debit-note-upload.component';
import { DocumentAttachedDocumentsComponent } from './documents/document-attached-documents/document-attached-documents.component';
import { DocumentResolverService } from './../core/resolvers/document-resolver.service';
import { DocumentSendEventsComponent } from './documents/document-send-events/document-send-events.component';
import { InvoiceCreateComponent } from './documents/invoices/invoice-create/invoice-create.component';
import { InvoiceEditComponent } from './documents/invoices/invoice-edit/invoice-edit.component';
import { InvoiceEditOverviewComponent } from './documents/invoices/invoice-edit-overview/invoice-edit-overview.component';
import { InvoiceListComponent } from './documents/invoices/invoice-list/invoice-list.component';
import { InvoiceUploadComponent } from './documents/invoices/invoice-upload/invoice-upload.component';
import { NgModule } from '@angular/core';
import { OrganizationComponent } from './organization.component';
import { OrganizationComponentResolverService } from './../core/resolvers/organization-component-resolver.service';
import { OrganizationKeyResolverService } from './../core/resolvers/organization-key-resolver.service';
import { OrganizationResolverService } from './../core/resolvers/organization-resolver.service';
import { ServerInfoResolverService } from './../core/resolvers/server-info-resolver.service';
import { SettingsActiveKeyComponent } from './settings/settings-active-key/settings-active-key.component';
import { SettingsAdditionalInformationComponent } from './settings/settings-additional-information/settings-additional-information.component';
import { SettingsAllKeysComponent } from './settings/settings-all-keys/settings-all-keys.component';
import { SettingsGeneralInformationComponent } from './settings/settings-general-information/settings-general-information.component';
import { SettingsGenericKeystoreComponent } from './settings/settings-generic-keystore/settings-generic-keystore.component';
import { SettingsKeyProvidersComponent } from './settings/settings-key-providers/settings-key-providers.component';
import { SettingsSmtpComponent } from './settings/settings-smtp/settings-smtp.component';
import { SettingsTasksComponent } from './settings/settings-tasks/settings-tasks.component';
import { SettingsThemeComponent } from './settings/settings-theme/settings-theme.component';

const routes: Routes = [
  {
    path: '',
    component: OrganizationComponent,
    resolve: {
      organization: OrganizationResolverService
    },
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'settings/general-information',
        component: SettingsGeneralInformationComponent,
        resolve: {
          organization: OrganizationResolverService
        }
      },
      {
        path: 'settings/additional-information',
        component: SettingsAdditionalInformationComponent,
        resolve: {
          organization: OrganizationResolverService
        }
      },
      {
        path: 'settings/smtp-settings',
        component: SettingsSmtpComponent,
        resolve: {
          organization: OrganizationResolverService
        }
      },
      {
        path: 'settings/theme-settings',
        component: SettingsThemeComponent,
        resolve: {
          organization: OrganizationResolverService,
          serverInfo: ServerInfoResolverService
        }
      },
      {
        path: 'settings/tasks-settings',
        component: SettingsTasksComponent,
        resolve: {
          organization: OrganizationResolverService
        }
      },
      {
        path: 'settings/keys',
        component: SettingsActiveKeyComponent,
        resolve: {
          organization: OrganizationResolverService,
          keys: OrganizationKeyResolverService
        }
      },
      {
        path: 'settings/keys/list',
        component: SettingsAllKeysComponent,
        resolve: {
          organization: OrganizationResolverService,
          keys: OrganizationKeyResolverService
        }
      },
      {
        path: 'settings/keys/providers',
        component: SettingsKeyProvidersComponent,
        resolve: {
          organization: OrganizationResolverService,
          serverInfo: ServerInfoResolverService
        }
      },
      {
        path: 'settings/keys/providers/:provider',
        component: SettingsGenericKeystoreComponent,
        resolve: {
          organization: OrganizationResolverService,
          serverInfo: ServerInfoResolverService
        }
      },
      {
        path: 'settings/keys/providers/:provider/:component',
        component: SettingsGenericKeystoreComponent,
        resolve: {
          organization: OrganizationResolverService,
          serverInfo: ServerInfoResolverService,
          instance: OrganizationComponentResolverService
        }
      },
      {
        path: 'invoices',
        component: InvoiceListComponent
      },
      {
        path: 'invoices/create',
        component: InvoiceCreateComponent
      },
      {
        path: 'invoices/upload',
        component: InvoiceUploadComponent
      },
      {
        path: 'invoices/:document',
        component: InvoiceEditComponent,
        resolve: {
          document: DocumentResolverService
        },
        children: [
          {
            path: '',
            component: InvoiceEditOverviewComponent
          },
          {
            path: 'send-events',
            component: DocumentSendEventsComponent
          },
          {
            path: 'attached-documents',
            component: DocumentAttachedDocumentsComponent
          }
        ]
      },
      {
        path: 'credit-notes',
        component: CreditNoteListComponent
      },
      {
        path: 'credit-notes/create',
        component: CreditNoteCreateComponent
      },
      {
        path: 'credit-notes/upload',
        component: CreditNoteUploadComponent
      },
      {
        path: 'credit-notes/:document',
        component: CreditNoteEditComponent,
        resolve: {
          document: DocumentResolverService
        },
        children: [
          {
            path: '',
            component: CreditNoteEditOverviewComponent
          },
          {
            path: 'send-events',
            component: DocumentSendEventsComponent
          },
          {
            path: 'attached-documents',
            component: DocumentAttachedDocumentsComponent
          }
        ]
      },
      {
        path: 'debit-notes',
        component: DebitNoteListComponent
      },
      {
        path: 'debit-notes/create',
        component: DebitNoteCreateComponent
      },
      {
        path: 'debit-notes/upload',
        component: DebitNoteUploadComponent
      },
      {
        path: 'debit-notes/:document',
        component: DebitNoteEditComponent,
        resolve: {
          document: DocumentResolverService
        },
        children: [
          {
            path: '',
            component: DebitNoteEditOverviewComponent
          },
          {
            path: 'send-events',
            component: DocumentSendEventsComponent
          },
          {
            path: 'attached-documents',
            component: DocumentAttachedDocumentsComponent
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OrganizationRoutingModule { }
