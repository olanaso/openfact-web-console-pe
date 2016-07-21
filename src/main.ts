import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode,provide } from '@angular/core';
import { AppComponent, environment, APP_ROUTER_PROVIDERS } from './app/';

import { HTTP_PROVIDERS,XHRBackend } from '@angular/http';


//import { InMemoryBackendService, SEED_DATA } from '@angular-in-memory-web-api';
import { InMemoryDataService }               from './app/in-memory-data.service';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, 
[APP_ROUTER_PROVIDERS,
HTTP_PROVIDERS
//provide()
// { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
//     { provide: SEED_DATA, useClass: InMemoryDataService }
]);
