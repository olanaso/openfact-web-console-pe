import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard';

import { OrganizationResolver } from './organization-resolver';
import { OrganizationComponent } from './organization.component';

import { OrganizationSettingsResolver } from './settings';
import { SettingsComponent } from './settings';
import { GeneralInformationComponent } from './settings';
import { AdditionalInformationComponent } from './settings';
import { OrganizationSmtpServerComponent } from './settings';
import { OrganizationUblServerComponent } from './settings';
import { OrganizationKeysComponent } from './settings';
import { OrganizationThemesComponent } from './settings';
import { OrganizationTasksComponent } from './settings';

import { InvoicesComponent, CreateInvoiceComponent, SearchInvoiceComponent, OverviewInvoiceComponent, SummaryInvoiceComponent } from './invoices';
import { CreditnotesComponent, CreateCreditnoteComponent, SearchCreditnoteComponent } from './creditnotes';
import { DebitnotesComponent, CreateDebitnoteComponent, SearchDebitnoteComponent } from './debitnotes';

import { InvoiceResolver } from './utils';

import { EventsComponent } from './events/events.component';
import { EventsConfigComponent } from './events/events-config/events-config.component';
import { AdminEventsComponent } from './events/admin-events/admin-events.component';

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
          { path: 'dashboard', component: DashboardComponent },
          {
            path: 'invoices',
            component: InvoicesComponent,
            children: [
              {
                path: 'overview/:invoice',
                component: OverviewInvoiceComponent,
                resolve: {
                  invoice: InvoiceResolver
                },
                children: [
                  { path: 'summary', component: SummaryInvoiceComponent },
                  { path: '', redirectTo: 'summary' }
                ]
              },
              { path: 'create', component: CreateInvoiceComponent },
              { path: 'search', component: SearchInvoiceComponent },
              { path: '', redirectTo: 'search' }
            ]
          },
          {
            path: 'creditnotes',
            component: CreditnotesComponent,
            children: [
              { path: 'create', component: CreateCreditnoteComponent },
              { path: 'search', component: SearchCreditnoteComponent },
              { path: '', redirectTo: 'search' }
            ]
          },
          {
            path: 'debitnotes',
            component: DebitnotesComponent,
            children: [
              { path: 'create', component: CreateDebitnoteComponent },
              { path: 'search', component: SearchDebitnoteComponent },
              { path: '', redirectTo: 'search' }
            ]
          },
          {
            path: 'settings',
            component: SettingsComponent,
            children: [
              {
                path: 'general-information-settings',
                component: GeneralInformationComponent,
                resolve: {
                  organization: OrganizationSettingsResolver
                }
              },
              {
                path: 'additional-information-settings',
                component: AdditionalInformationComponent,
                resolve: {
                  organization: OrganizationSettingsResolver
                }
              },
              {
                path: 'email-settings',
                component: OrganizationSmtpServerComponent,
                resolve: {
                  organization: OrganizationSettingsResolver
                }
              },
              {
                path: 'ublserver-settings',
                component: OrganizationUblServerComponent,
                resolve: {
                  organization: OrganizationSettingsResolver
                }
              },
              {
                path: 'key-settings',
                component: OrganizationKeysComponent,
                resolve: {
                  organization: OrganizationSettingsResolver
                }
              },
              {
                path: 'themes-settings',
                component: OrganizationThemesComponent,
                resolve: {
                  organization: OrganizationSettingsResolver
                }
              },
              {
                path: 'tasks-settings',
                component: OrganizationTasksComponent,
                resolve: {
                  organization: OrganizationSettingsResolver
                }
              },
              {
                path: '',
                redirectTo: 'general-information-settings'
              }
            ]
          },
          {
            path: 'events',
            component: EventsComponent,
            children: [
              {
                path: 'admin-events',
                component: AdminEventsComponent
              },
              {
                path: 'config',
                component: EventsConfigComponent
              },
              {
                path: '',
                redirectTo: 'admin-events'
              }
            ]
          },
          { path: '', redirectTo: 'dashboard' }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class OrganizationRoutingModule { }