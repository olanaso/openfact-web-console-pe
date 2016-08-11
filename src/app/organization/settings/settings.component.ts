import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {OrganizationModel} from '../../services';

@Component({
  moduleId: module.id,
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css']
})
export class SettingsComponent implements OnInit {

  organization: OrganizationModel;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(result => {
      this.organization = <OrganizationModel>result;
    });
  }

  ngOnInit() {
  }

}
