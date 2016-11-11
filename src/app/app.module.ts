import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';

import { KeycloakService } from "./keycloak.service";
import { KeycloakHttp } from "./keycloak.http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    KeycloakService,
    {
      provide: Http,
      useFactory:
      (
        backend: XHRBackend,
        defaultOptions: RequestOptions,
        keycloakService: KeycloakService
      ) => new KeycloakHttp(backend, defaultOptions, keycloakService),
      deps: [XHRBackend, RequestOptions, KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
