import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';

/*Directives import*/
import { DefaultHeaderComponent } from '../../directives/default-header';
import { NavbarUtilityMobileComponent } from '../../directives/navbar-utility-mobile';
import { AlertsComponent } from '../../directives/alerts';

/*Models import*/
import { Alert } from '../../models/alert';
import { OrganizationModel } from '../../models/organization-model';

/*Services import*/
import { AlertMessageService } from '../../services/util/alert-message.service';
import { DataService } from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'app-organizations',
  templateUrl: 'organizations.component.html',
  styleUrls: ['organizations.component.css'],
  directives: [ROUTER_DIRECTIVES, DefaultHeaderComponent, NavbarUtilityMobileComponent, AlertsComponent],
  providers: [AlertMessageService]
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
    this.alertMessageService.getAlerts().forEach(alert => {
      this.alerts.push(alert.data);
    });
    this.alertMessageService.clearAlerts();

    this.loadProjects();
  }

  loadProjects() {
    this.dataService.organizations().getAll()
      .subscribe(result => this.organizations = result, error => this.alertMessageService.addAlert(undefined));
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
