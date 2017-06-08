import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';

import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { OrganizationComponentsModule } from '../../components/components.module';
import { DocumentComponentsModule } from '../document/components/components.module';
import { EventsSettingsComponent } from './events-settings/events-settings.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { ServerInfoResolverService } from '../../../core/resolvers/server-info-resolver.service';
import { EventsConfigResolverService } from '../../../core/resolvers/events-config-resolver.service';

const routes: Routes = [
  {
    path: '', component: AdminEventsComponent
  },
  {
    path: 'events-settings', component: EventsSettingsComponent,
    resolve: {
      serverInfo: ServerInfoResolverService,
      eventsConfig: EventsConfigResolverService
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
    AdminEventsComponent,
    EventsSettingsComponent
  ],
  entryComponents: [],
  exports: [],
  providers: []
})
export class EventsModule {
}
