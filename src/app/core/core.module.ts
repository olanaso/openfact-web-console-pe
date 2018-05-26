import {
  DocumentosRelacionadosPercepcionResolverService,
  DocumentosRelacionadosBajasResolverService,
  DocumentosRelacionadosRetencionResolverService,
  IgvResolverService,
  MonedasResolverService,
  TiposAfectacionIGVResolverService,
  TiposComprobantePagoResolverService,
  TiposDocumentoEntidadResolverService,
  TiposNotaCreditoResolverService,
  TiposNotaDebitoResolverService,
  TiposRegimenPercepcionResolverService,
  TiposRegimenRetencionResolverService,
} from './resolvers/generic-type-resolver.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { KEYCLOAK_HTTP_PROVIDER, KeycloakHttp } from './../keycloak/keycloak.http';

import { ConfigService } from './../config.service';
import { CreditNoteService } from './data/credit-note.service';
import { CurrentOrganizationService } from './services/current-organization.service';
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
import { KeycloakOAuthService } from '../keycloak/keycloak.oauth.service';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading/loading.service';
import { OrganizationComponentResolverService } from './resolvers/organization-component-resolver.service';
import { OrganizationKeyResolverService } from './resolvers/organization-key-resolver.service';
import { OrganizationResolverService } from './resolvers/organization-resolver.service';
import { OrganizationService } from './data/organization.service';
import { OrganizationSunatService } from './data/organization-sunat.service';
import { PerceptionService } from './data/perception.service';
import { RestangularService } from './data/restangular.service';
import { RestangularServiceFactory } from './data/restangular.service';
import { RetentionService } from './data/retention.service';
import { Router } from '@angular/router';
import { ServerInfoResolverService } from './resolvers/server-info-resolver.service';
import { ServerInfoService } from './data/server-info.service';
import { SharedModule } from '../shared/shared.module';
import { VoidedDocumentService } from './data/voided-document.service';
import { CountryService } from './data/country.service';
import { CommonModule } from '@angular/common';
import { ToastsManager } from 'ng2-toastr';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    DialogComponent,
    LoadingComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  exports: [
    LoadingComponent
  ],
  providers: [
    KeycloakOAuthService,
    KEYCLOAK_HTTP_PROVIDER,
    {
      provide: RestangularService,
      useFactory: RestangularServiceFactory,
      deps: [Http, Router, ToastsManager, ConfigService]
    },
    DialogService,
    LoadingService,

    DataService,
    OrganizationService,
    ServerInfoService,
    DocumentService,
    CountryService,
    FileService,
    InvoiceService,
    CreditNoteService,
    DebitNoteService,
    OrganizationSunatService,
    PerceptionService,
    RetentionService,
    VoidedDocumentService,
    CountryService,

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
    DocumentosRelacionadosBajasResolverService,
    TiposRegimenRetencionResolverService,
    DocumentosRelacionadosRetencionResolverService,
    MonedasResolverService,

    CurrentOrganizationService
  ]
})
export class CoreModule {
}
