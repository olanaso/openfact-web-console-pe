import { DocumentosRelacionadosPercepcionResolverService, DocumentosRelacionadosRetencionResolverService, IgvResolverService, MonedasResolverService, TiposAfectacionIGVResolverService, TiposComprobantePagoResolverService, TiposDocumentoEntidadResolverService, TiposNotaCreditoResolverService, TiposNotaDebitoResolverService, TiposRegimenPercepcionResolverService, TiposRegimenRetencionResolverService } from './resolvers/generic-type-resolver.service';

import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { AlertsComponent } from './alert/alerts.component';
import { CreditNoteService } from './data/credit-note.service';
import { DataService } from './data/data.service';
import { DebitNoteService } from './data/debit-note.service';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.service';
import { DocumentResolverService } from './resolvers/document-resolver.service';
import { DocumentService } from './data/document.service';
import { EventsConfigResolverService } from './resolvers/events-config-resolver.service';
import { FileService } from './data/file.service';
import { Http } from '@angular/http';
import { InvoiceService } from './data/invoice.service';
import { KeycloakHttpFactory } from './keycloak.http';
import { KeycloakService } from './keycloak.service';
import { NgModule } from '@angular/core';
import { OrganizationComponentResolverService } from './resolvers/organization-component-resolver.service';
import { OrganizationKeyResolverService } from './resolvers/organization-key-resolver.service';
import { OrganizationResolverService } from './resolvers/organization-resolver.service';
import { OrganizationService } from './data/organization.service';
import { OrganizationSunatService } from './data/organization-sunat.service';
import { PerceptionService } from './data/perception.service';
import { RequestOptions } from '@angular/http';
import { RestangularService } from './data/restangular.service';
import { RestangularServiceFactory } from './data/restangular.service';
import { RetentionService } from './data/retention.service';
import { Router } from '@angular/router';
import { ServerInfoResolverService } from './resolvers/server-info-resolver.service';
import { ServerInfoService } from './data/server-info.service';
import { SharedModule } from '../shared/shared.module';
import { VoidedDocumentService } from './data/voided-document.service';
import { XHRBackend } from '@angular/http';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AlertsComponent,
    AlertComponent,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  exports: [
    AlertsComponent
  ],
  providers: [
    KeycloakService,
    {
      provide: Http,
      useFactory: KeycloakHttpFactory,
      deps: [XHRBackend, RequestOptions, KeycloakService]
    },
    {
      provide: RestangularService,
      useFactory: RestangularServiceFactory,
      deps: [Http, Router, AlertService]
    },
    AlertService,
    DialogService,
    DataService,
    OrganizationService,
    ServerInfoService,
    DocumentService,
    FileService,
    InvoiceService,
    CreditNoteService,
    DebitNoteService,
    OrganizationSunatService,
    PerceptionService,
    RetentionService,
    VoidedDocumentService,

    OrganizationResolverService,
    OrganizationKeyResolverService,
    OrganizationComponentResolverService,
    ServerInfoResolverService,
    EventsConfigResolverService,
    DocumentResolverService,

    TiposComprobantePagoResolverService,
    TiposNotaCreditoResolverService,
    TiposNotaDebitoResolverService,
    TiposDocumentoEntidadResolverService,
    TiposAfectacionIGVResolverService,
    IgvResolverService,
    TiposRegimenPercepcionResolverService,
    DocumentosRelacionadosPercepcionResolverService,
    TiposRegimenRetencionResolverService,
    DocumentosRelacionadosRetencionResolverService,
    MonedasResolverService
  ]
})
export class CoreModule { }
