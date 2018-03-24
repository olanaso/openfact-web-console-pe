import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { KeycloakService } from './app/keycloak-service/keycloak.service';
import { KeycloakIdentityService } from './app/keycloak-service/keycloak-identity.service';

if (environment.production) {
  enableProdMode();
}

// const noLogin: boolean = false; // convenient for development

// if (noLogin) {
//   platformBrowserDynamic().bootstrapModule(AppModule);
// } else {

KeycloakService.init({ onLoad: 'login-required' }).then(() => {
  KeycloakIdentityService.init(KeycloakService.keycloakAuth);
  platformBrowserDynamic().bootstrapModule(AppModule);
}).catch((err: any) => {
  console.log('Error in bootstrap: ' + JSON.stringify(err));
});

// }

