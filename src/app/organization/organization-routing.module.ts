import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard';

import { OrganizationResolver } from './organization-resolver';
import { OrganizationComponent } from './organization.component';

import { OrganizationSettingsResolver } from './settings';
import { SettingsComponent, GeneralInformationComponent, AdditionalInformationComponent, EmailComponent, OrganizationKeysComponent, OrganizationThemesComponent } from './settings';

import { InvoicesComponent, CreateInvoiceComponent, SearchInvoiceComponent, OverviewInvoiceComponent, SummaryInvoiceComponent } from './invoices';
import { CreditnotesComponent, CreateCreditnoteComponent, SearchCreditnoteComponent } from './creditnotes';
import { DebitnotesComponent, CreateDebitnoteComponent, SearchDebitnoteComponent } from './debitnotes';

import { InvoiceResolver } from './utils';

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
                component: EmailComponent,
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
                path: '',
                redirectTo: 'general-information-settings'
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