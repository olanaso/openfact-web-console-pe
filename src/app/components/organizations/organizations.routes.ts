import { Component, OnInit } from '@angular/core';
import { provideRouter, RouterConfig } from '@angular/router';

import { OrganizationsComponent } from './organizations.component';
import { CreateOrganizationComponent } from './create-organization';
import { EditOrganizationComponent } from './edit-organization';
import { OverviewComponent } from './edit-organization/overview';
import { SettingsComponent } from './edit-organization/settings';
import {AddressComponent} from './edit-organization/settings/address';
import {GeneralInformationComponent} from './edit-organization/settings/general-information';

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
            component: SettingsComponent,
            children: [
              {
                path: '',
                redirectTo: 'address',
                pathMatch: 'full'
              },
              {
                path: 'address',
                component: AddressComponent
              },
              {
                path: 'general-information',
                component: GeneralInformationComponent
              }

            ]
          }
        ]
      }
    ]
  }
];