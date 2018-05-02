import { NavigationModule } from 'patternfly-ng/navigation';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { TooltipConfig, TooltipModule } from 'ngx-bootstrap/tooltip';
import { WindowReference } from './utilities/window.reference';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  providers: [BsDropdownConfig, TooltipConfig, WindowReference]
})
export class SidebarModule { }
