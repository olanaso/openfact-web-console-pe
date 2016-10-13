import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Restangular, RestangularOpenfact } from './services';
import { DataService, OrganizationService } from './services';

import { DefaultHeaderComponent } from './components';
import { ButtonCancelComponent, ButtonSaveComponent, ButtonDeleteComponent } from './components';
import { AlertsComponent, AlertComponent, AlertService } from './components';
import { CapitalizePipe } from './pipes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot()
    ],
    declarations: [
        DefaultHeaderComponent,
        ButtonCancelComponent,
        ButtonSaveComponent,
        AlertComponent,
        AlertsComponent,
        CapitalizePipe,
        ButtonDeleteComponent
    ],
    exports: [
        DefaultHeaderComponent,
        ButtonCancelComponent,
        ButtonSaveComponent,
        ButtonDeleteComponent,
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