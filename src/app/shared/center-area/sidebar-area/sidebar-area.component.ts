import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sidebar-area',
  templateUrl: 'sidebar-area.component.html',
  styleUrls: ['sidebar-area.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class SidebarAreaComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
