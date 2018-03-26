import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { VerticalNavigationModule } from './../layout/vertical-navigation/vertical-navigation.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    VerticalNavigationModule,
    SidebarModule
  ],
  declarations: [CompanyComponent]
})
export class CompanyModule { }
