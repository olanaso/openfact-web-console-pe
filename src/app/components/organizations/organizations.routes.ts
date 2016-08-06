import { Component, OnInit } from '@angular/core';
import { provideRouter, RouterConfig } from '@angular/router';

import { OrganizationsComponent } from './organizations.component';
import { CreateOrganizationComponent } from './create-organization';
import { EditOrganizationComponent } from './edit-organization';
import { OverviewComponent } from './edit-organization/overview';
import { SettingsComponent } from './edit-organization/settings';

export const OrganizationsRoutes: RouterConfig = [
  {
    path: 'organizations',
    children: [
      {
        path: '',
        component: OrganizationsComponent,
      },
      {
        path: 'create-organization',
        component: CreateOrganizationComponent
      },
      {
        path: 'edit-organization/:organization',
        component: EditOrganizationComponent,
        children: [
          {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full'
          },
          {
            path: 'overview',
            component: OverviewComponent
          },
          {
            path: 'settings',
            component: SettingsComponent
          }
        ]
      }
    ]
  }
];