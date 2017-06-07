import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';

import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { OrganizationComponentsModule } from '../../components/components.module';
import { SettingsGeneralInformationComponent } from './settings-general-information/settings-general-information.component';
import { SettingsAdditionalInformationComponent } from './settings-additional-information/settings-additional-information.component';
import { SettingsSmtpComponent } from './settings-smtp/settings-smtp.component';
import { SettingsThemeComponent } from './settings-theme/settings-theme.component';
import { SettingsTasksComponent } from './settings-tasks/settings-tasks.component';
import { SettingsActiveKeyComponent } from './settings-active-key/settings-active-key.component';
import { SettingsAllKeysComponent } from './settings-all-keys/settings-all-keys.component';
import { SettingsKeyProvidersComponent } from './settings-key-providers/settings-key-providers.component';
import { SettingsGenericKeystoreComponent } from './settings-generic-keystore/settings-generic-keystore.component';
import { SettingsSunatComponent } from './settings-sunat/settings-sunat.component';
import { DocumentComponentsModule } from '../document/components/components.module';
import { OrganizationResolverService } from '../../../core/resolvers/organization-resolver.service';
import { ServerInfoResolverService } from '../../../core/resolvers/server-info-resolver.service';
import { OrganizationKeyResolverService } from '../../../core/resolvers/organization-key-resolver.service';
import { OrganizationComponentResolverService } from 'app/core/resolvers/organization-component-resolver.service';
import { SettingsTabsetComponent } from './settings-tabset/settings-tabset.component';
import { ComponentConfigComponent } from './component-config/component-config.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'general-information', pathMatch: 'full'
  },
  {
    path: 'general-information',
    component: SettingsGeneralInformationComponent,
    resolve: {
      organization: OrganizationResolverService
    }
  },
  {
    path: 'additional-information',
    component: SettingsAdditionalInformationComponent,
    resolve: {
      organization: OrganizationResolverService
    }
  },
  {
    path: 'smtp-settings',
    component: SettingsSmtpComponent,
    resolve: {
      organization: OrganizationResolverService
    }
  },
  {
    path: 'theme-settings',
    component: SettingsThemeComponent,
    resolve: {
      organization: OrganizationResolverService,
      serverInfo: ServerInfoResolverService
    }
  },
  {
    path: 'tasks-settings',
    component: SettingsTasksComponent,
    resolve: {
      organization: OrganizationResolverService
    }
  },
  {
    path: 'keys',
    component: SettingsActiveKeyComponent,
    resolve: {
      organization: OrganizationResolverService,
      keys: OrganizationKeyResolverService
    }
  },
  {
    path: 'keys/list',
    component: SettingsAllKeysComponent,
    resolve: {
      organization: OrganizationResolverService,
      keys: OrganizationKeyResolverService
    }
  },
  {
    path: 'keys/providers',
    component: SettingsKeyProvidersComponent,
    resolve: {
      organization: OrganizationResolverService,
      serverInfo: ServerInfoResolverService
    }
  },
  {
    path: 'keys/providers/:provider',
    component: SettingsGenericKeystoreComponent,
    resolve: {
      organization: OrganizationResolverService,
      serverInfo: ServerInfoResolverService
    }
  },
  {
    path: 'keys/providers/:provider/:component',
    component: SettingsGenericKeystoreComponent,
    resolve: {
      organization: OrganizationResolverService,
      serverInfo: ServerInfoResolverService,
      instance: OrganizationComponentResolverService
    }
  },
  {
    path: 'sunat',
    component: SettingsSunatComponent,
    resolve: {
      organization: OrganizationResolverService
    }
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    OrganizationComponentsModule,
    DocumentComponentsModule,

    SharedModule,
    CoreModule
  ],
  declarations: [
    SettingsGeneralInformationComponent,
    SettingsAdditionalInformationComponent,
    SettingsSmtpComponent,
    SettingsThemeComponent,
    SettingsTasksComponent,
    SettingsActiveKeyComponent,
    SettingsAllKeysComponent,
    SettingsKeyProvidersComponent,
    SettingsGenericKeystoreComponent,
    SettingsSunatComponent,

    SettingsTabsetComponent,
    ComponentConfigComponent
  ],
  entryComponents: [],
  exports: [],
  providers: []
})
export class SettingsModule {
}
