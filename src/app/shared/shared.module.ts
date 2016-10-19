import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';

import { Restangular, RestangularOpenfact } from './services';
import { DataService, OrganizationService, InvoiceService, CreditnoteService, DebitnoteService } from './services';

import { DefaultHeaderComponent, OrganizationHeaderComponent, SidebarComponent } from './components';
import { ButtonCancelComponent, ButtonSaveComponent, ButtonDeleteComponent, ButtonSwitchComponent } from './components';
import { AlertsComponent, AlertComponent, AlertService } from './components';
import { LabelsComponent } from './components';
import { RelativeTimestampComponent } from './components';
import { XmlViewerComponent } from './components';
import { CapitalizePipe } from './pipes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        MomentModule
    ],
    declarations: [
        DefaultHeaderComponent,
        OrganizationHeaderComponent,
        SidebarComponent,
        ButtonCancelComponent,
        ButtonSaveComponent,
        ButtonDeleteComponent,
        ButtonSwitchComponent,
        AlertComponent,
        AlertsComponent,
        CapitalizePipe,
        RelativeTimestampComponent,
        LabelsComponent,
        XmlViewerComponent,        
    ],
    exports: [
        DefaultHeaderComponent,
        OrganizationHeaderComponent,
        SidebarComponent,
        ButtonCancelComponent,
        ButtonSaveComponent,
        ButtonDeleteComponent,
        ButtonSwitchComponent,
        AlertsComponent,
        CapitalizePipe,
        RelativeTimestampComponent,
        LabelsComponent,
        XmlViewerComponent
    ],
    providers: [
        Restangular,
        RestangularOpenfact,
        AlertService,
        DataService,
        OrganizationService,
        InvoiceService,
        CreditnoteService,
        DebitnoteService
    ]
})
export class SharedModule { }