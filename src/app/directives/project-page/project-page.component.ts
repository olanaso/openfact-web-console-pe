import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar';
import { EventsSidebarComponent } from '../events-sidebar';

@Component({
  moduleId: module.id,
  selector: 'project-page',
  templateUrl: 'project-page.component.html',
  styleUrls: ['project-page.component.css'],
  directives: [SidebarComponent, EventsSidebarComponent]
})
export class ProjectPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
