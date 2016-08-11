import {NgModule, provide} from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';
import {HTTP_PROVIDERS, Http} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routes';
import {APP_CONFIG, DEFAULT_CONFIG, AppConfig} from './app.config';

import {Restangular} from './services/restangular';
import {OpenfactService} from './services/restangular-impl/openfact.service';
import {SunatService} from './services/restangular-impl/sunat.service';
import {NavbarService} from './services/navbar.service';
import {AlertMessageService} from './services/alert-message.service';

import {OrganizationModule} from './components/organizations/organization.module';
import {AboutComponent} from './components/about';
import {ErrorComponent} from './components/error';

import {DefaultHeaderComponent} from './shared/default-header';
import {NavbarUtilityComponent} from './shared/navbar-utility';
import {AlertsComponent} from './shared/alerts';

import {DataService} from './services/data.service';
import {OrganizationProviderService} from './services/providers/organization-provider.service';
import {InvoiceProviderService} from './services/providers/invoice-provider.service';
import {OrganizationResolve} from './services/resolvers/organization-resolve';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        OrganizationModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        ErrorComponent,
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

        NavbarService,
        AlertMessageService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }