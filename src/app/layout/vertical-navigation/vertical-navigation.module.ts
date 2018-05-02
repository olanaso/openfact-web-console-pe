import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationModule } from 'patternfly-ng/navigation';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';

import { VerticalNavigationComponent } from './vertical-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    BsDropdownModule
  ],
  declarations: [VerticalNavigationComponent],
  exports: [VerticalNavigationComponent],
  providers: [BsDropdownConfig]
})
export class VerticalNavigationModule { }
