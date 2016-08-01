import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';

import { DefaultHeaderComponent } from '../../directives/default-header';
import { NavbarUtilityMobileComponent } from '../../directives/navbar-utility-mobile';

import { OrganizationModel } from '../../models/organization-model';
import { AlertModel } from '../../models/alert-model';

import { AlertMessageService } from '../../services/alert-message.service';
import { AuthService } from '../../services/auth.service';
import { OrganizationService } from '../../services/organization.service';

@Component({
  moduleId: module.id,
  selector: 'app-organizations',
  templateUrl: 'organizations.component.html',
  styleUrls: ['organizations.component.css'],
  directives: [ROUTER_DIRECTIVES, DefaultHeaderComponent, NavbarUtilityMobileComponent],
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

    /*Auth*/
    /*this.authService.withUser().then(function() {
      this.loadProjects();
    });*/
    this.loadProjects();
  }

  loadProjects() {
    this.organizationService.getAll().then(result => this.projects = result);
     /*DataService.list("projects", $scope, function(projects) {
        $scope.projects = projects.by("metadata.name");
        $scope.showGetStarted = hashSizeFilter($scope.projects) === 0;
      });*/
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
