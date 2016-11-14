import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../components/components.module';
import { ServicesModule } from '../services/services.module';
import { SharedModule } from '../shared/shared.module';

import { RootOrganizationResolver } from './resolvers/root-organization-resolver';

import { OrganizationComponent } from './organization.component';
import { OrganizationRoutingModule } from './organization-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OrganizationRoutingModule,
        NgbModule.forRoot(),
        ComponentsModule,
        ServicesModule,
        SharedModule
    ],
    declarations: [
        OrganizationComponent
    ],
    providers: [
        RootOrganizationResolver
    ]

})
export class OrganizationModule { }
