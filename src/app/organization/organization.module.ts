import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { OrganizationComponent } from './organization.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { VerticalNavigationModule } from './../layout/vertical-navigation/vertical-navigation.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NxgLoginModule } from './../ngx-login-client/ngx-login.module';

@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    BsDropdownModule,
    NxgLoginModule,
    VerticalNavigationModule,
    SidebarModule
  ],
  declarations: [OrganizationComponent]
})
export class OrganizationModule { }
