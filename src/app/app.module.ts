import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Keycloak
import { KeycloakService } from './keycloak-service/keycloak.service';
import { KEYCLOAK_HTTP_INTERCEPTOR } from './keycloak-service/keycloak.interceptor';

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

import { realmProvider } from './shared/realm-token.provider';

// Error
import { ErrorService } from './layout/error/error.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

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

    // Api Config
    openfactUIConfigProvider,
    ApiLocatorService,

    // Error
    ErrorService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
