import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { AlertsComponent } from './alert/alerts.component';
import { DataService } from './data/data.service';
import { Http } from '@angular/http';
import { KeycloakHttpFactory } from './keycloak.http';
import { KeycloakService } from './keycloak.service';
import { NgModule } from '@angular/core';
import { OrganizationService } from './data/organization.service';
import { RequestOptions } from '@angular/http';
import { RestangularService } from './data/restangular.service';
import { RestangularServiceFactory } from './data/restangular.service';
import { Router } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { XHRBackend } from '@angular/http';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AlertsComponent,
    AlertComponent
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
    DataService,
    OrganizationService
  ]
})
export class CoreModule { }
