import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Alert, AlertMessageService} from '../shared-services';
import {OrganizationModel, DataService} from '../../services';

@Component({
  moduleId: module.id,
  selector: 'project-header',
  templateUrl: 'project-header.component.html',
  styleUrls: ['project-header.component.css']
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
