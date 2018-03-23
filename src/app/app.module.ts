import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Keycloak
import { KeycloakService } from './keycloak-service/keycloak.service';
import { KEYCLOAK_HTTP_INTERCEPTOR } from './keycloak-service/keycloak.interceptor';
import { KeycloakIdentityService } from './keycloak-service/keycloak-identity.service';

// Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Api Config
import { openfactUIConfigProvider } from './shared/openfact-ui-config.service';
import { ApiLocatorService } from './shared/api-locator.service';

// Ngx
import { NgxBaseModule } from './ngx-base/ngx-base.module';
import { NxgLoginModule } from './ngx-login-client/ngx-login.module';
import { NgxOpenfactModule } from './ngx-openfact/ngx-openfact.module';

import { ssoApiUrlProvider } from './shared/sso-api.provider';
import { realmProvider } from './shared/realm-token.provider';
import { authApiUrlProvider } from './shared/auth-api.provider';

// Error
import { ErrorService } from './layout/error/error.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,

    // Bootstrap
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),

    // Ngx
    NgxBaseModule.forRoot(),
    NxgLoginModule.forRoot(),
    NgxOpenfactModule.forRoot()
  ],
  providers: [
    // Keycloak
    KeycloakService,
    KEYCLOAK_HTTP_INTERCEPTOR,
    KeycloakIdentityService,

    // Api Config
    openfactUIConfigProvider,
    ApiLocatorService,

    // Error
    ErrorService,

    ssoApiUrlProvider,
    authApiUrlProvider,
    realmProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
