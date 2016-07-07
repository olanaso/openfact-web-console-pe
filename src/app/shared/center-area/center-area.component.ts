import { Component, OnInit } from '@angular/core';
import { SidebarAreaComponent } from './sidebar-area';
import { ContentAreaComponent } from './content-area';

@Component({
  moduleId: module.id,
  selector: 'app-center-area',
  templateUrl: 'center-area.component.html',
  styleUrls: ['center-area.component.css'],
  directives: [SidebarAreaComponent, ContentAreaComponent]
})
export class CenterAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
