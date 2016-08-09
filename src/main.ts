import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, Inject, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { Http } from '@angular/http';

import { AppComponent, environment, APP_ROUTER_PROVIDERS } from './app/';
import { RestConfig, APP_CONFIG, OPENFACT_CONFIG, SUNAT_CONFIG} from './app/app.config';

import { Restangular } from './app/services/restangular/restangular';
import { OpenfactService } from './app/services/restangular-impl/openfact.service';
import { SunatService } from './app/services/restangular-impl/sunat.service';

import { DataService } from './app/services/data.service';
import { OrganizationProviderService } from './app/services/providers/organization-provider.service';
import { InvoiceProviderService } from './app/services/providers/invoice-provider.service';
import { OrganizationResolve } from './app/services/resolvers/organization-resolve';

import { AlertMessageService } from './app/services/alert-message.service';

if (environment.production) {
  enableProdMode();
}

let openfactServiceFactory = (config: RestConfig, http: Http) => {
  return new OpenfactService(config.url, http);
}
export let OpenfactServiceProvider = provide(OpenfactService, {
  useFactory: openfactServiceFactory,
  deps: [APP_CONFIG, Http]
});

let sunatServiceFactory = (config: RestConfig, http: Http) => {
  return new SunatService(config.url, http);
}
export let SunatServiceProvider = provide(SunatService, {
  useFactory: sunatServiceFactory,
  deps: [APP_CONFIG, Http]
});


bootstrap(AppComponent, [
  /*angular components*/
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,

  /*third party components*/

  /*project components*/
  provide(APP_CONFIG, { useValue: OPENFACT_CONFIG }),
  OpenfactServiceProvider,
  provide(APP_CONFIG, { useValue: SUNAT_CONFIG }),
  SunatServiceProvider,

  DataService,
  OrganizationProviderService,
  InvoiceProviderService,
  OrganizationResolve,

  AlertMessageService
]);
