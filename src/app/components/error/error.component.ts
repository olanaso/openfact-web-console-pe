import { Component, OnInit } from '@angular/core';

import { DefaultHeaderComponent } from '../../directives/default-header';
import { NavbarUtilityMobileComponent } from '../../directives/navbar-utility-mobile';

@Component({
  moduleId: module.id,
  selector: 'app-error',
  templateUrl: 'error.component.html',
  styleUrls: ['error.component.css'],
  providers: [DefaultHeaderComponent, NavbarUtilityMobileComponent]
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
