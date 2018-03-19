import { SunatService } from './sunat/sunat.service';
import { ConfigService, configServiceInitializer } from './config.service';
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
import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { MomentModule } from 'angular2-moment';
import { FileUploadModule } from 'ng2-file-upload';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { LocalStorageModule } from 'angular-2-local-storage';
import { ToastModule } from 'ng2-toastr';
import { KeycloakOAuthService } from './keycloak/keycloak.oauth.service';
import { KEYCLOAK_HTTP_PROVIDER } from './keycloak/keycloak.http';
import { KeycloakConfigService, keycloakConfigServiceInitializer } from 'app/keycloak.config.service';

export function restangularProviderConfigurer(restangularProvider: any, config: ConfigService) {
  restangularProvider.setBaseUrl(config.getSettings().apiEndpoint);
}

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
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
    RestangularModule.forRoot([ConfigService], restangularProviderConfigurer),
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
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

    NgbModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),

    SharedModule,
    CoreModule
  ],
  providers: [
    SunatService,

    KeycloakOAuthService,
    KEYCLOAK_HTTP_PROVIDER,
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceInitializer,
      deps: [ConfigService],
      multi: true,
    },
    KeycloakConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: keycloakConfigServiceInitializer,
      deps: [KeycloakConfigService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
