import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';

import { KeycloakService } from "./keycloak.service";
import { KeycloakHttp } from "./keycloak.http";

import { AppRoutingModule } from './app-routing.module';

import { AdminModule } from './admin/admin.module';
import { OrganizationModule } from './organization/organization.module';
import { ComponentsModule } from './components/components.module';
import { ErrorComponentsModule } from './error-components/error-components.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AdminModule,
    OrganizationModule,
    ComponentsModule,
    ErrorComponentsModule,
    ServicesModule,
    SharedModule,
    NgbModule.forRoot(),
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
