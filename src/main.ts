import { AppModule } from './app/app.module';
import { KeycloakOAuthService } from './app/keycloak/keycloak.oauth.service';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();
}

KeycloakOAuthService.init({ onLoad: 'login-required' })
  .then(() => platformBrowserDynamic().bootstrapModule(AppModule))
  .catch(e => window.location.reload());
