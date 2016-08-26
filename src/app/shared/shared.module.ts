import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PipeModule} from '../pipes';

import {DefaultHeaderComponent} from './default-header';
import {ProjectHeaderComponent} from './project-header';
import {NavbarUtilityComponent} from './navbar-utility';
import {NavbarUtilityMobileComponent} from './navbar-utility-mobile';
import {SidebarUtilityMobileComponent} from './sidebar-utility-mobile';
import {EventsSidebarComponent} from './events-sidebar';
import {ProjectPageComponent} from './project-page';
import {SidebarComponent} from './sidebar';

import {AlertsComponent, AlertComponent} from './alerts';

import {ButtonSaveComponent} from './button-save';
import {ButtonResetComponent} from './button-reset';
import {ButtonCancelComponent} from './button-cancel';
import {ButtonDeleteComponent} from './button-delete';
import {ButtonSwitchComponent} from './button-switch';

import {NavbarService} from './shared-services/navbar.service';
import {HeaderService} from './shared-services/header.service';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PipeModule
    ],
    declarations: [
        DefaultHeaderComponent,
        ProjectHeaderComponent,
        NavbarUtilityComponent,
        NavbarUtilityMobileComponent,
        SidebarUtilityMobileComponent,
        EventsSidebarComponent,
        ProjectPageComponent,
        SidebarComponent,

        AlertsComponent, AlertComponent,

        ButtonSaveComponent,
        ButtonResetComponent,
        ButtonCancelComponent,
        ButtonDeleteComponent,
        ButtonSwitchComponent
    ],
    exports: [
        DefaultHeaderComponent,
        ProjectHeaderComponent,
        NavbarUtilityComponent,
        NavbarUtilityMobileComponent,
        SidebarUtilityMobileComponent,
        EventsSidebarComponent,
        ProjectPageComponent,
        SidebarComponent,

        AlertsComponent,

        ButtonSaveComponent,
        ButtonResetComponent,
        ButtonCancelComponent,
        ButtonDeleteComponent,
        ButtonSwitchComponent
    ],
    providers: [
        NavbarService,
        HeaderService
    ]
})

export class SharedModule {

}