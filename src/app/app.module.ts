import {NgModule, provide} from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HTTP_PROVIDERS, Http} from '@angular/http';

import {AppComponent} from './app.component';
import {PipeModule} from './pipes';
import {SharedModule, AlertMessageService} from './shared';
import {OrganizationModule} from './organization';

import {routing, appRoutingProviders} from './app.routes';
import {APP_CONFIG, DEFAULT_CONFIG, AppConfig} from './app.config';

import {Restangular, OpenfactService, SunatService, DataService} from './services';
import {AboutComponent, ErrorComponent, CreateOrganizationComponent, ListOrganizationComponent} from './pages';

import {OrganizationProviderService, InvoiceProviderService} from './services';
import {OrganizationResolve} from './services';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        PipeModule,
        SharedModule,
        OrganizationModule,
        routing        
    ],
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

        AlertMessageService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
