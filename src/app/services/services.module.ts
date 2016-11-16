import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

// Keycloak
import { KeycloakService } from "../keycloak.service";
import { KeycloakHttp } from "../keycloak.http";

import { Restangular } from './data/restangular';
import { RestangularOpenfact } from './data/restangular-openfact';
import { DataService } from './data/data.service';
import { OrganizationService } from './data/organization.service';
import { InvoiceService } from './data/invoice.service';
import { CreditnoteService } from './data/creditnote.service';
import { DebitnoteService } from './data/debitnote.service';
import { ServerInfoService } from './data/server-info.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
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
    Restangular,
    RestangularOpenfact,
    DataService,
    OrganizationService,
    InvoiceService,
    CreditnoteService,
    DebitnoteService,
    ServerInfoService,
  ]
})
export class ServicesModule { }
