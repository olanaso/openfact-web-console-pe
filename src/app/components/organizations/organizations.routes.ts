import { Component, OnInit } from '@angular/core';
import { provideRouter, RouterConfig } from '@angular/router';

import { OrganizationsComponent } from './organizations.component';
import { CreateOrganizationComponent } from './create-organization';
import { OverviewComponent } from './edit-organization/overview';
import { SettingsComponent } from './edit-organization/settings';

export const OrganizationsRoutes: RouterConfig = [
  { path: 'organizations', component: OrganizationsComponent },
  { path: 'organizations/create-organization', component: CreateOrganizationComponent },  
  {
    path: 'organizations/edit-organization/:organization',
    redirectTo: '/organizations/edit-organization/:organization/overview',
    pathMatch: 'full'
  },
  { path: 'organizations/edit-organization/:organization/overview', component: OverviewComponent },
  { path: 'organizations/edit-organization/:organization/settings', component: SettingsComponent }
];