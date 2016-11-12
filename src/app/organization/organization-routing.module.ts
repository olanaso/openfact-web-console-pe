import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrganizationComponent } from './organization.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralInformationSettingsComponent } from './general-information-settings/general-information-settings.component';
import { AdditionalInformationSettingsComponent } from './additional-information-settings/additional-information-settings.component';

import { RootOrganizationResolver } from './resolvers/root-organization-resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: OrganizationComponent,
        resolve: {
          organization: RootOrganizationResolver
        },
        children: [
          {
            path: '',
            component: DashboardComponent
          },
          /*{
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
              {
                path: 'create',
                component: CreateInvoiceComponent,
                children: [
                  { path: 'default', component: CreateInvoiceDefaultComponent },
                  { path: 'pe', component: CreateInvoicePeComponent },
                  { path: '', redirectTo: 'default' }
                ]
              },
              {
                path: 'search',
                component: SearchInvoiceComponent
              },
              {
                path: '',
                redirectTo: 'search'
              }
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
          },*/
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class OrganizationRoutingModule { }