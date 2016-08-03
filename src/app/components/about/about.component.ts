import { Component, OnInit } from '@angular/core';
import { DefaultHeaderComponent } from '../../directives/default-header';
import { NavbarUtilityMobileComponent } from '../../directives/navbar-utility-mobile';

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
