import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProjectHeaderComponent } from '../../../util/project-header';
import { ProjectPageComponent } from '../../../util/project-page';



@Component({
  moduleId: module.id,
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css'],
  directives: [ProjectHeaderComponent, ProjectPageComponent,ROUTER_DIRECTIVES]
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
