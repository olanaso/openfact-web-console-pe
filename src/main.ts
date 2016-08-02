import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent, environment, APP_ROUTER_PROVIDERS } from './app/';

import { RestangularService } from './app/services/rest/restangular.service';
import { RestangularOpenfactService } from './app/services/rest/restangular-openfact.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  RestangularService,
  RestangularOpenfactService
]);
