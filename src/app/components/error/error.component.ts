import { Component, OnInit } from '@angular/core';

import { DefaultHeaderComponent } from '../../shared/default-header';
import { NavbarUtilityMobileComponent } from '../../shared/navbar-utility-mobile';

@Component({
  moduleId: module.id,
  selector: 'app-error',
  templateUrl: 'error.component.html',
  styleUrls: ['error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
