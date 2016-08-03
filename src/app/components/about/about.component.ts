import { Component, OnInit } from '@angular/core';
import { DefaultHeaderComponent } from '../util/default-header';
import { NavbarUtilityMobileComponent } from '../util/navbar-utility-mobile';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: [DefaultHeaderComponent, NavbarUtilityMobileComponent]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
