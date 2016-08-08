import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';

import { ProjectHeaderComponent } from '../../util/project-header';
import { ProjectPageComponent } from '../../util/project-page';

@Component({
  moduleId: module.id,
  selector: 'app-edit-organization',
  templateUrl: 'edit-organization.component.html',
  styleUrls: ['edit-organization.component.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES, ProjectHeaderComponent, ProjectPageComponent]
})
export class EditOrganizationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
