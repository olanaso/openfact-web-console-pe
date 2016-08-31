import {NgModule, provide} from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HTTP_PROVIDERS, Http} from '@angular/http';

import {AppComponent} from './app.component';
import {PipeModule} from './pipes';
import {SharedModule, AlertService} from './shared';
import {OrganizationModule} from './organization';

import {routing, appRoutingProviders} from './app.routes';
import {APP_CONFIG, DEFAULT_CONFIG, AppConfig} from './app.config';

import {Restangular, OpenfactService, SunatService, DataService} from './services';
import {AboutComponent, ErrorComponent, CreateOrganizationComponent, ListOrganizationComponent} from './pages';

import {OrganizationProviderService, InvoiceProviderService} from './services';
import {OrganizationResolve} from './services';

import {KeycloakService} from './keycloak';
import {HTTP_BINDINGS} from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HttpModule} from '@angular/http';
import {TranslateModule} from 'ng2-translate/ng2-translate';

//import {TranslateService, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        routing,
        PipeModule,
        SharedModule,
        OrganizationModule,
        HttpModule,
        TranslateModule.forRoot(),
        NgbModule
    ],
    exports: [BrowserModule, HttpModule, TranslateModule,NgbModule],
    declarations: [
        AppComponent,
        AboutComponent,
        ErrorComponent,
        CreateOrganizationComponent,
        ListOrganizationComponent
    ],
    providers: [
        /*router providers*/
        appRoutingProviders,

        /**/
        HTTP_PROVIDERS,
        HTTP_BINDINGS,
        KeycloakService,

        /*openfact services*/
        provide(APP_CONFIG, { useValue: DEFAULT_CONFIG }),
        provide(OpenfactService, {
            useFactory: (config: AppConfig, http: Http) => {
                let host = config.api.openfact.host;
                let prefix = config.api.openfact.prefix;
                return new OpenfactService(host + prefix, http);
            },
            deps: [APP_CONFIG, Http]
        }),
        provide(SunatService, {
            useFactory: (config: AppConfig, http: Http) => {
                let host = config.api.sunat.host;
                let prefix = config.api.sunat.prefix;
                return new SunatService(host + prefix, http);
            },
            deps: [APP_CONFIG, Http]
        }),

        DataService,
        OrganizationResolve,
        InvoiceProviderService,
        OrganizationProviderService,

        AlertService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }