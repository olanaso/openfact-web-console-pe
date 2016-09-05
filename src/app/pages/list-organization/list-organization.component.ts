import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Alert, AlertService} from '../../shared';
import {OrganizationModel, DataService} from '../../services';

@Component({
  moduleId: module.id,
  selector: 'organization-list',
  templateUrl: 'list-organization.component.html',
  styleUrls: ['list-organization.component.css']

})
export class ListOrganizationComponent implements OnInit {

  organizations: Array<OrganizationModel>;
  alerts: Array<Alert>;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private dataService: DataService) {
    this.organizations = [];
    this.alerts = [];
  }

  ngOnInit() {
    this.loadOrganizations();
  }

  loadOrganizations() {
    this.dataService.organizations().getAll().subscribe(
      result => {
        this.organizations = result;
      }, error => {
        this.alerts.push({
          type: 'error',
          message: 'Error loading projects '
        });
      });
  }

  editOrganization(organization: OrganizationModel) {
    let link = ['/organization', organization.name];
    this.router.navigate(link);
  }

}
