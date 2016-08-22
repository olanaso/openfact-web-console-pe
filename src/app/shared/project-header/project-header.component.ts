import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {HeaderService} from '../shared-services';
import {OrganizationModel, DataService} from '../../services';

import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap';


@Component({
  moduleId: module.id,
  selector: 'project-header',
  templateUrl: 'project-header.component.html',
  styleUrls: ['project-header.component.css'],
  directives:[DROPDOWN_DIRECTIVES, CORE_DIRECTIVES]
})
export class ProjectHeaderComponent implements OnInit {

  organizations: Array<OrganizationModel> = [];
  private selectOrganization: OrganizationModel;
  private beforeOrganization: OrganizationModel;

  constructor(
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute,
    private headerService: HeaderService) {
      
  }

  ngOnInit() {
    this.loadProjects();
  }

  changeOrganization(organization: OrganizationModel) {
   
   let link = ['/organization', organization.name];

   
   this.router.navigate(link);
  }

  loadProjects() {
    this.dataService.organizations().getAll().subscribe(organizations => { this.organizations = organizations });

  }


}
