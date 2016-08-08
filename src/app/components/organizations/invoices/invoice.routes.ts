import { provideRouter, RouterConfig } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { InvoicesComponent } from './invoices.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';

export const InvoicesRoutes: RouterConfig = [
  { path: 'organizations/:organization/invoices', component: InvoicesComponent },
  { path: 'organizations/:organization/invoices/create-invoice', component: CreateInvoiceComponent },
  {
    path: 'organizations/edit-organization/:organization',
    redirectTo: '/organizations/edit-organization/:organization/invoices',
    pathMatch: 'full'
  },
//   { path: 'organizations/edit-organization/:organization/settings', component: SettingsComponent },
  { path: 'organizations/edit-organization/:organization/invoices/edit-invoice/:id', component: EditInvoiceComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(InvoicesRoutes)
];