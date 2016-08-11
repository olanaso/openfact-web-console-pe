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

  organization: OrganizationModel;

  constructor(public activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(result => {
      this.organization = <OrganizationModel>result;
    });
  }

  ngOnInit() {
  }

}
