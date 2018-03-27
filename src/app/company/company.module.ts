import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { VerticalNavigationModule } from './../layout/vertical-navigation/vertical-navigation.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NxgLoginModule } from './../ngx-login-client/ngx-login.module';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    BsDropdownModule,
    NxgLoginModule,
    VerticalNavigationModule,
    SidebarModule
  ],
  declarations: [CompanyComponent]
})
export class CompanyModule { }
