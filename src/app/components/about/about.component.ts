import { Component, OnInit } from '@angular/core';
import { DefaultHeaderComponent } from '../../shared/default-header';
import { NavbarUtilityMobileComponent } from '../../shared/navbar-utility-mobile';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
