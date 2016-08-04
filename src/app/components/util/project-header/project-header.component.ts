import { Component, OnInit } from '@angular/core';
import { NavbarUtilityComponent } from '../navbar-utility';

@Component({
  moduleId: module.id,
  selector: 'project-header',
  templateUrl: 'project-header.component.html',
  styleUrls: ['project-header.component.css'],
  directives: [NavbarUtilityComponent]
})
export class ProjectHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
