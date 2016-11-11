import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrganizationsComponent } from './organizations/organizations.component';
import { OrganizationCreateComponent } from './organizations/organization-create/organization-create.component';
import { OrganizationSearchComponent } from './organizations/organization-search/organization-search.component';

import { ServerInfoComponent } from './server-info/server-info.component';
import { ServerInfoGeneralComponent } from './server-info/server-info-general/server-info-general.component';
import { ServerInfoProvidersComponent } from './server-info/server-info-providers/server-info-providers.component';

import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/organizations/search',
        pathMatch: 'full'
      },
      {
        path: 'organizations',
        component: OrganizationsComponent,
        children: [
          { path: 'search', component: OrganizationSearchComponent },
          { path: 'create', component: OrganizationCreateComponent },
          { path: '', redirectTo: 'search' }
        ]
      },
      {
        path: 'server-info',
        component: ServerInfoComponent,
        children: [
          { path: 'general', component: ServerInfoGeneralComponent },
          { path: 'providers', component: ServerInfoProvidersComponent },
          { path: '', redirectTo: 'general' }
        ]
      },
      { path: 'about', component: AboutComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }