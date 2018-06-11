import { OPENFACT_API_URL } from './config/openfact-api';
import { TranslateLoader, TranslateModule, TranslateStaticLoader } from 'ng2-translate';

import { APP_INITIALIZER } from '@angular/core';
import { AboutComponent } from './common/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { Http, HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { CommonHeaderComponent } from './common/header/header.component';
import { Error403Component } from './common/error403/error403.component';
import { Error404Component } from './common/error404/error404.component';
import { Error500Component } from './common/error500/error500.component';
import { ServerInfoComponent } from './common/server-info/server-info.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestangularModule } from 'ngx-restangular';
import { BsDropdownModule, BsDatepickerModule, ModalModule } from 'ngx-bootstrap';
import { MomentModule } from 'angular2-moment';
import { FileUploadModule } from 'ng2-file-upload';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { LocalStorageModule } from 'angular-2-local-storage';
import { ToastModule } from 'ng2-toastr';
import { KeycloakOAuthService } from './keycloak/keycloak.oauth.service';
import { KEYCLOAK_HTTP_PROVIDER } from './keycloak/keycloak.http';
import { SurenService } from './sunat/suren.service';
import { Configuration } from './app.suren';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { es } from 'ngx-bootstrap/locale';
defineLocale('es', es);


// Config
import { openfactUIConfigProvider } from './config/openfact-ui-config.service';
import { ApiLocatorService } from './config/api-locator.service';
import { authApiUrlProvider } from './config/auth-api.provider';
import { realmProvider } from './config/realm-token.provider';
import { openfactApiUrlProvider } from './config/openfact-api.provider';
import { REALM } from './config/realm.token';

export function restangularProviderConfigurer(restangularProvider: any, apiUrl: string) {
  restangularProvider.setBaseUrl(apiUrl);
}

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

export function getDatepickerConfig(): BsDatepickerConfig {
  return Object.assign(new BsDatepickerConfig(), {
    locale: 'es',
    containerClass: 'theme-default',
    dateInputFormat: 'MM/DD/YYYY',
    selectDay: true,
    showWeekNumbers: false
  });
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServerInfoComponent,
    CommonHeaderComponent,
    Error403Component,
    Error404Component,
    Error500Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,


    BrowserAnimationsModule,
    RestangularModule.forRoot([REALM], restangularProviderConfigurer),
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    MomentModule,
    JWBootstrapSwitchModule,
    FileUploadModule,
    LocalStorageModule.withConfig({
      prefix: 'openfact-pe',
      storageType: 'localStorage'
    }),
    ToastModule.forRoot(),
    AppRoutingModule,

    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),

    SharedModule,
    CoreModule
  ],
  providers: [
    // Config
    ApiLocatorService,
    openfactUIConfigProvider,
    authApiUrlProvider,
    realmProvider,
    openfactApiUrlProvider,

    SurenService,
    Configuration,
    KeycloakOAuthService,
    KEYCLOAK_HTTP_PROVIDER,
    { provide: BsDatepickerConfig, useFactory: getDatepickerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
