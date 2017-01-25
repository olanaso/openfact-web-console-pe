import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { OrganizationComponent } from './organization.component';
import { OrganizationComponentResolverService } from './../core/resolvers/organization-component-resolver.service';
import { OrganizationKeyResolverService } from './../core/resolvers/organization-key-resolver.service';
import { OrganizationResolverService } from './../core/resolvers/organization-resolver.service';
import { ServerInfoResolverService } from './../core/resolvers/server-info-resolver.service';
import { SettingsActiveKeyComponent } from './settings-active-key/settings-active-key.component';
import { SettingsAdditionalInformationComponent } from './settings-additional-information/settings-additional-information.component';
import { SettingsAllKeysComponent } from './settings-all-keys/settings-all-keys.component';
import { SettingsGeneralInformationComponent } from './settings-general-information/settings-general-information.component';
import { SettingsGenericKeystoreComponent } from './settings-generic-keystore/settings-generic-keystore.component';
import { SettingsKeyProvidersComponent } from './settings-key-providers/settings-key-providers.component';
import { SettingsSmtpComponent } from './settings-smtp/settings-smtp.component';
import { SettingsTasksComponent } from './settings-tasks/settings-tasks.component';
import { SettingsThemeComponent } from './settings-theme/settings-theme.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OrganizationRoutingModule { }
