import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { OrganizationComponentsModule } from './../components/components.module';
import { OrganizationUIComponent } from './ui.component';
import { OrganizationResolverService } from '../../core/resolvers/organization-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: OrganizationUIComponent,
    resolve: {
      organization: OrganizationResolverService
    },
    children: [
      { path: '', redirectTo: 'documents', pathMatch: 'full' },
      { path: 'overview', loadChildren: 'app/organization/ui/dashboard/dashboard.module#DashboardModule' },
      { path: 'documents', loadChildren: 'app/organization/ui/document/document.module#DocumentModule' },
      { path: 'events', loadChildren: 'app/organization/ui/events/events.module#EventsModule' },
      { path: 'settings', loadChildren: 'app/organization/ui/settings/settings.module#SettingsModule' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    OrganizationComponentsModule
  ],
  exports: [RouterModule],
  declarations: [OrganizationUIComponent]
})
export class OrganizationUIModule {
}
