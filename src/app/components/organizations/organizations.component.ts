import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';

import { DefaultHeaderComponent } from '../../directives/default-header';
import { NavbarUtilityMobileComponent } from '../../directives/navbar-utility-mobile';
import { AlertsComponent } from '../../directives/alerts';

import { OrganizationModel } from '../../models/organization-model';
import { AlertModel } from '../../models/alert-model';

import { AlertMessageService } from '../../services/util/alert-message.service';
import { AuthService } from '../../services/auth/auth.service';
import { OrganizationService } from '../../services/organization.service';

@Component({
  moduleId: module.id,
  selector: 'app-organizations',
  templateUrl: 'organizations.component.html',
  styleUrls: ['organizations.component.css'],
  directives: [ROUTER_DIRECTIVES, DefaultHeaderComponent, NavbarUtilityMobileComponent, AlertsComponent],
  providers: [AlertMessageService, AuthService, OrganizationService]
})
export class OrganizationsComponent implements OnInit {
  
  projects: Array<OrganizationModel>;
  alerts: Array<AlertModel>;
  showGetStarted: boolean;
  canCreate = undefined;
  
  constructor(
    private router: Router,
    private alertMessageService: AlertMessageService,
    private authService: AuthService,
    private organizationService: OrganizationService) {
      this.projects = [];
      this.alerts = [];
      this.showGetStarted = false;
  }

  ngOnInit() {
    this.alertMessageService.getAlerts().forEach(function(alert) {
      this.alerts[alert.name] = alert.data;    
    });
    this.alertMessageService.clearAlerts();

    this.loadProjects();
  }

  loadProjects() {
    this.organizationService.getAll()
    .subscribe(result => this.projects = result, error => this.alertMessageService.addAlert(undefined));
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
