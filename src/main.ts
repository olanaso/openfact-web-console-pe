import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent, environment, APP_ROUTER_PROVIDERS } from './app/';

import { AlertMessageService } from './app/services/alert-message.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  AlertMessageService
]);
