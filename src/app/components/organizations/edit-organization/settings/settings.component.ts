import { Component, OnInit } from '@angular/core';

import { ProjectHeaderComponent } from '../../../util/project-header';
import { ProjectPageComponent } from '../../../util/project-page';

@Component({
  moduleId: module.id,
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css'],
  directives: [ProjectHeaderComponent, ProjectPageComponent]
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
