import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import { KeycloakService } from "./app/keycloak.service";

if (environment.production) {
  enableProdMode();
}

KeycloakService.init().then(() => {
  platformBrowserDynamic().bootstrapModule(AppModule);
}).catch(() => window.location.reload());

