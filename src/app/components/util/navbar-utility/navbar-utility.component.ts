import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES } from '@angular/common';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'navbar-utility',
  templateUrl: 'navbar-utility.component.html',
  styleUrls: ['navbar-utility.component.css'],
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, DROPDOWN_DIRECTIVES]
})
export class NavbarUtilityComponent implements OnInit {  

  constructor() { }

  ngOnInit() {
  }

}
