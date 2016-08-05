import { Component, OnInit } from '@angular/core';
import { NavbarUtilityComponent } from '../navbar-utility';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

import { OrganizationModel } from '../../../services/models/organization-model';
import { AlertMessageService } from '../../../services/alert-message.service';
import { Alert } from '../../../services/alert';

@Component({
  moduleId: module.id,
  selector: 'project-header',
  templateUrl: 'project-header.component.html',
  styleUrls: ['project-header.component.css'],
  directives: [NavbarUtilityComponent]
})
export class ProjectHeaderComponent implements OnInit {
  //refData;
  organizations: Array<OrganizationModel>;
  alerts: Array<Alert>;
  constructor(
    private router: Router,
    private dataService: DataService,
    private alertMessageService: AlertMessageService) {
    this.organizations = [];
    this.alerts = [];
    // this.refData = [
    //   { name: 'select', value: 'none' },
    //   { name: 'one', value: 'one' },
    //   { name: 'two', value: 'two' }
    // ];
  }

  ngOnInit() {
    this.loadAlerts();
    this.loadProjects();
  }
  loadAlerts() {
    this.alertMessageService.getAlerts().forEach(alert => {
      this.alerts.push(alert.data);
    });
    this.alertMessageService.clearAlerts();
  }

  onSelectOrganization(value) {
    //value=
    let link = ['/organizations/edit-organization', value];
    this.router.navigate(link);
    // console.log(value);  
  }
  loadProjects() {
    this.dataService.organizations().getAll().subscribe(
      organizations => {
        this.organizations = organizations
      }, error => {
        this.alerts.push({
          type: 'error',
          message: 'Error loading projects ',
          details: 'Something happend when loading projects.',
          links: [{
            label: 'Retry',
            href: './'
          }]
        });
      });
  }


}
