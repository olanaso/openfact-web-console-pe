import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrganizationComponent } from './organization.component';
import { DashboardComponent } from './dashboard';
import { SettingsComponent, GeneralInformationComponent, AdditionalInformationComponent, EmailComponent, OrganizationKeysComponent, OrganizationThemesComponent } from './settings';
import { InvoicesComponent, CreateInvoiceComponent, SearchInvoiceComponent, OverviewInvoiceComponent, SummaryInvoiceComponent } from './invoices';
import { CreditnotesComponent, CreateCreditnoteComponent, SearchCreditnoteComponent } from './creditnotes';
import { DebitnotesComponent, CreateDebitnoteComponent, SearchDebitnoteComponent } from './debitnotes';

import { OrganizationResolver, InvoiceResolver } from './utils';

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
              { path: 'general-information-settings', component: GeneralInformationComponent },
              { path: 'additional-information-settings', component: AdditionalInformationComponent },
              { path: 'email-settings', component: EmailComponent },
              { path: 'key-settings', component: OrganizationKeysComponent },
              { path: 'themes-settings', component: OrganizationThemesComponent },              
              { path: '', redirectTo: 'general-information-settings' }
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