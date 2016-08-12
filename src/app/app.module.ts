import {NgModule, provide} from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';

import {RouterModule} from '@angular/router';
import {HTTP_PROVIDERS, Http} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routes';
import {RestConfig, APP_CONFIG, OPENFACT_CONFIG, SUNAT_CONFIG} from './app.config';

import {TOOLTIP_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import { Restangular } from './services/restangular/restangular';
import { OpenfactService } from './services/restangular-impl/openfact.service';
import { SunatService } from './services/restangular-impl/sunat.service';

import {OrganizationModule} from './components/organizations/organization.module';
import {AboutComponent} from './components/about';
import {ErrorComponent} from './components/error';

import {AlertsComponent} from './shared/alerts';
import {DefaultHeaderComponent} from './shared/default-header';
import {NavbarUtilityMobileComponent} from './shared/navbar-utility-mobile';

import {DataService} from './services/data.service';
import {OrganizationProviderService} from './services/providers/organization-provider.service';
import {InvoiceProviderService} from './services/providers/invoice-provider.service';
import {OrganizationResolve} from './services/resolvers/organization-resolve';

import {NavbarService} from './services/navbar.service';
import {AlertMessageService} from './services/alert-message.service';
import {HeaderService} from './services/header.service';

let openfactServiceFactory = (config: RestConfig, http: Http) => {
    return new OpenfactService(config.url, http);
}
export let OpenfactServiceProvider = provide(OpenfactService, {
    useFactory: openfactServiceFactory,
    deps: [APP_CONFIG, Http]
});

let sunatServiceFactory = (config: RestConfig, http: Http) => {
    return new SunatService(config.url, http);
}
export let SunatServiceProvider = provide(SunatService, {
    useFactory: sunatServiceFactory,
    deps: [APP_CONFIG, Http]
});

@NgModule({
    declarations: [
        AppComponent,

        /*routing config*/
        AboutComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,

        /*router config*/
        routing,
        OrganizationModule        
    ],
    providers: [
        /*router providers*/
        appRoutingProviders,

        /**/
        HTTP_PROVIDERS,

        /*openfact services*/
        provide(APP_CONFIG, { useValue: OPENFACT_CONFIG }),
        OpenfactServiceProvider,
        provide(APP_CONFIG, { useValue: SUNAT_CONFIG }),
        SunatServiceProvider,

        DataService,
        OrganizationResolve,
        InvoiceProviderService,
        OrganizationProviderService,

        NavbarService,
        AlertMessageService,
        HeaderService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }