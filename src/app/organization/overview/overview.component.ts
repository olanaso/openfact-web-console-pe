import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {OrganizationModel} from '../../services';

@Component({
  moduleId: module.id,
  selector: 'overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
