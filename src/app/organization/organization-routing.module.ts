import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrganizationComponent } from './organization.component';
import { DashboardComponent } from './dashboard';
import { SettingsComponent } from './settings';
import { InvoicesComponent, CreateInvoiceComponent, SearchInvoiceComponent } from './invoices';
import { CreditnotesComponent, CreateCreditnoteComponent, SearchCreditnoteComponent } from './creditnotes';
import { DebitnotesComponent, CreateDebitnoteComponent, SearchDebitnoteComponent } from './debitnotes';

import { OrganizationResolver } from './utils';

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
          { path: 'settings', component: SettingsComponent },
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