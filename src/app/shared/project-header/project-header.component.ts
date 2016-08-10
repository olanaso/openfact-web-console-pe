import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

import { NavbarUtilityComponent } from '../navbar-utility';

import { OrganizationModel } from '../../services/models/organization-model';
import { AlertMessageService } from '../../services/alert-message.service';
import { Alert } from '../../services/alert';

@Component({
  moduleId: module.id,
  selector: 'project-header',
  templateUrl: 'project-header.component.html',
  styleUrls: ['project-header.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarUtilityComponent]
})
export class ProjectHeaderComponent implements OnInit {

  organizations: Array<OrganizationModel> = [];

  constructor(
    private router: Router,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.loadProjects();
  }

  editOrganization(organizationName: string) {
    let link = ['/organizations/edit-organization', organizationName];
    this.router.navigate(link);
  }

  loadProjects() {
    this.dataService.organizations().getAll().subscribe(organizations => { this.organizations = organizations });
  }


}
