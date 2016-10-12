import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { Restangular, RestangularOpenfact } from './services';
import { DataService, OrganizationService } from './services';

import { DefaultHeaderComponent } from './components';
import { ButtonCancelComponent, ButtonSaveComponent } from './components';
import { AlertsComponent, AlertComponent, AlertService } from './components';
import { CapitalizePipe } from './pipes';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [
        DefaultHeaderComponent,
        ButtonCancelComponent,
        ButtonSaveComponent,
        AlertComponent,
        AlertsComponent,
        CapitalizePipe
    ],
    exports: [
        DefaultHeaderComponent,
        ButtonCancelComponent,
        ButtonSaveComponent,
        AlertsComponent,
        CapitalizePipe
    ],
    providers: [
        Restangular,
        RestangularOpenfact,
        AlertService,
        DataService,
        OrganizationService
    ]
})
export class SharedModule { }