// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Third modules
import { RestangularModule } from 'ng2-restangular';

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
import  {PerceptionService} from './data/perception.service';
import {RetentionService} from './data/retention.service';
import { ServerInfoService } from './data/server-info.service';
import { EventService } from './data/event.service';
import { StorageFileService } from './data/storage-file.service';

import { OrganizationPeService } from './data/organization-pe.service';

// Resolvers
import { OrganizationResolver } from './resolvers/organization-resolver';
import { EventsConfigResolver } from './resolvers/events-config-resolver';
import { ServerInfoResolver } from './resolvers/server-info-resolver';
import { OrganizationKeysResolver } from './resolvers/organization-keys-resolver';
import { OrganizationComponentResolver } from './resolvers/organization-component-resolver';
import { InvoiceResolver } from './resolvers/invoice-resolver';
import { InvoiceJsonResolver } from './resolvers/invoice-json-resolver';
import { InvoiceTextResolver } from './resolvers/invoice-text-resolver';
import { CreditNoteResolver } from './resolvers/credit-note-resolver';
import { DebitNoteResolver } from './resolvers/debit-note-resolver';

import { PerceptionResolver } from './resolvers/perception-resolver';
import { PerceptionJsonResolver } from './resolvers/perception-json-resolver';
import { PerceptionTextResolver } from './resolvers/perception-text-resolver';

import { RetentionResolver } from './resolvers/retention-resolver';
import { RetentionJsonResolver } from './resolvers/retention-json-resolver';
import { RetentionTextResolver } from './resolvers/retention-text-resolver';

// Guards
import { AllowedDataOrganizations } from './guards/allowed-data-organizations';
import { AllowedDataRoles } from './guards/allowed-data-roles';

@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    HttpModule,

    // Third modules
    RestangularModule.forRoot((RestangularProvider) => {
      RestangularProvider.setBaseUrl('http://localhost:8081/openfact');
      let refreshAccesstoken = function (response) {
        return Observable.create((observer) => {
          KeycloakService.auth.authorization.authorize(response.headers('WWW-Authenticate')).then(function (rpt) {
            observer.next();
            observer.complete();
          }, function () {
            console.log('You can not access or perform the requested operation on this resource.');
          }, function () {
            console.log('Unexpected error from server.');
          });
        });
      };
      RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
        if (response.status === 403 || response.status == 401) {
          refreshAccesstoken(response).switchMap(refreshAccesstokenResponse => {
            return response.repeatRequest(response.request);
          }).subscribe(res => responseHandler(res), err => subject.error(err));
          return false; // error handled
        }
        return true; // error not handled
      });
    })
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
    PerceptionService,
    RetentionService,
    ServerInfoService,
    EventService,
    StorageFileService,

    OrganizationPeService,

    // Resolvers
    OrganizationResolver,
    EventsConfigResolver,
    ServerInfoResolver,
    OrganizationKeysResolver,
    OrganizationComponentResolver,

    InvoiceResolver,
    InvoiceJsonResolver,
    InvoiceTextResolver,
    CreditNoteResolver,
    DebitNoteResolver,

    PerceptionResolver,
    PerceptionJsonResolver,
    PerceptionTextResolver,

    RetentionResolver,
    RetentionJsonResolver,
    RetentionTextResolver,
    //Guards
    AllowedDataOrganizations,
    AllowedDataRoles
  ]
})
export class CoreModule { }
