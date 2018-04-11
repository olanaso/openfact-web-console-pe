import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AboutModalModule } from './../about-modal/about-modal.module';

import { HorizontalNavigationComponent } from './horizontal-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule,
    AboutModalModule
  ],
  declarations: [
    HorizontalNavigationComponent
  ],
  exports: [
    HorizontalNavigationComponent
  ]
})
export class HorizontalNavigationModule { }
