import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment, AppModule } from './app/';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {KeycloakService} from './app/keycloak';
if (environment.production) {
  enableProdMode();
}


KeycloakService.init().then(
    o=>{
        platformBrowserDynamic().bootstrapModule(AppModule);
    },
    x=>{
        window.location.reload();
    }
    
);