import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared';

import { CreateOrganizationComponent } from './create-organization';
import { OrganizationsComponent } from './organizations/organizations.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule,
        NgbModule.forRoot(),
        SharedModule
    ],
    declarations: [
        CreateOrganizationComponent,
        OrganizationsComponent
    ],
    providers: [

    ]
})
export class AdminModule { }
