// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

// Third modules

// Components
import { AlertComponent } from './alert/alert.component';
import { AlertsComponent } from './alert/alerts.component';

// Services
import { KeycloakHttp } from "./keycloak.http";
import { KeycloakService } from "./keycloak.service";

import { AlertService } from './alert/alert.service';

import { Restangular } from './data/restangular';
import { RestangularOpenfact } from './data/restangular-openfact';
import { DataService } from './data/data.service';
import { OrganizationService } from './data/organization.service';
import { InvoiceService } from './data/invoice.service';
import { CreditnoteService } from './data/creditnote.service';
import { DebitnoteService } from './data/debitnote.service';
import { ServerInfoService } from './data/server-info.service';

// Guards
import { AllowedDataOrganizations } from './guards/allowed-data-organizations';
import { AllowedDataRoles } from './guards/allowed-data-roles';

@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    HttpModule
  ],
  declarations: [
    AlertComponent,
    AlertsComponent
  ],
  exports: [
    AlertsComponent
  ],
  providers: [
    KeycloakService,
    {
      provide: Http,
      useFactory:
      (
        backend: XHRBackend,
        defaultOptions: RequestOptions,
        keycloakService: KeycloakService
      ) => new KeycloakHttp(backend, defaultOptions, keycloakService),
      deps: [XHRBackend, RequestOptions, KeycloakService]
    },

    AlertService,

    Restangular,
    RestangularOpenfact,
    DataService,
    OrganizationService,
    InvoiceService,
    CreditnoteService,
    DebitnoteService,
    ServerInfoService,

    //Guards
    AllowedDataOrganizations,
    AllowedDataRoles
  ]
})
export class CoreModule { }
