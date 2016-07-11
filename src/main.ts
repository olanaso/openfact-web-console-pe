import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment,AppComponent } from './app/';
//import { AppComponent  } from './app/';
//import {APP_ROUTER_PROVIDERS} from './app/app.routes';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

if (environment.production) {
  enableProdMode();

}

bootstrap(AppComponent,[
  APP_ROUTER_PROVIDERS
  ])
.catch(err => console.error(err));
