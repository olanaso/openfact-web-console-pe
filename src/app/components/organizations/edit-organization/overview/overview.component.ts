import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router, ActivatedRoute, ResolveData } from '@angular/router';

import { ProjectHeaderComponent } from '../../../util/project-header';
import { ProjectPageComponent } from '../../../util/project-page';


import { OrganizationModel } from '../../../../services/models/organization-model';


@Component({
  moduleId: module.id,
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.css'],
  directives: [ProjectHeaderComponent, ProjectPageComponent]
})
export class OverviewComponent implements OnInit {

  algo: any;

  constructor(public route: ActivatedRoute) {
    let algo = this.route.snapshot;
    console.log(algo);
    this.route.data.subscribe(val => this.algo = val);
  }

  ngOnInit() {
    console.log(this.algo);
  }

}
