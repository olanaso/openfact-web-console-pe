import { Component, OnInit } from '@angular/core';
import { SidebarAreaComponent } from './sidebar-area';
import { ContentAreaComponent } from './content-area';
import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-center-area',
  templateUrl: 'center-area.component.html',
  styleUrls: ['center-area.component.css'],
  directives: [ROUTER_DIRECTIVES,SidebarAreaComponent, ContentAreaComponent]
})
export class CenterAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
