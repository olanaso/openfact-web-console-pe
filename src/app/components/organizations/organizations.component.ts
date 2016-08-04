import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';

/*Directives import*/
import { DefaultHeaderComponent } from '../util/default-header';
import { NavbarUtilityMobileComponent } from '../util/navbar-utility-mobile';
import { AlertsComponent } from '../util/alerts';
import { ButtonDeleteComponent } from '../util/button-delete';

/*Models import*/
import { Alert } from '../../services/alert';
import { OrganizationModel } from '../../services/models/organization-model';

/*Services import*/
import { AlertMessageService } from '../../services/alert-message.service';
import { DataService } from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'app-organizations',
  templateUrl: 'organizations.component.html',
  styleUrls: ['organizations.component.css'],
  directives: [ROUTER_DIRECTIVES, DefaultHeaderComponent, NavbarUtilityMobileComponent, AlertsComponent, ButtonDeleteComponent],
  providers: []
})
export class OrganizationsComponent implements OnInit {

  organizations: Array<OrganizationModel>;
  alerts: Array<Alert>;

  constructor(
    private router: Router,
    private alertMessageService: AlertMessageService,
    private dataService: DataService) {
    this.organizations = [];
    this.alerts = [];
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

  loadProjects() {
    this.dataService.organizations().getAll().subscribe(
      result => {
        this.organizations = result
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

  editOrganization(organization: OrganizationModel) {
    let link = ['/organizations/edit-organization', organization.name];
    this.router.navigate(link);
  }

  deleteOrganization(organization: OrganizationModel) {
    console.log('eliminando');
    this.loadProjects();
  }

}
