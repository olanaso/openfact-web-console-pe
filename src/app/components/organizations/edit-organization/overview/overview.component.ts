import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router, ActivatedRoute, ResolveData } from '@angular/router';

import { ProjectHeaderComponent } from '../../../../shared/project-header';
import { ProjectPageComponent } from '../../../../shared/project-page';

import { OrganizationModel } from '../../../../services/models/organization-model';

@Component({
  moduleId: module.id,
  selector: 'overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.css'],
  directives: [ProjectHeaderComponent, ProjectPageComponent]
})
export class OverviewComponent implements OnInit {

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
