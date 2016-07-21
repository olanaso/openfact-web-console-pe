import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment, APP_ROUTER_PROVIDERS } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { XHRBackend } from '@angular/http';
//import { XHRBackend } from '@angular/http';
// import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
// import { InMemoryDataService }               from './in-memory-data.service';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, 
[APP_ROUTER_PROVIDERS,
HTTP_PROVIDERS]);
