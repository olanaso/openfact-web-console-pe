import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

import { NavbarUtilityComponent } from '../navbar-utility';

import { OrganizationModel } from '../../services/models/organization-model';
import { AlertMessageService } from '../../services/alert-message.service';
import { Alert } from '../../services/alert';
import { HeaderService } from '../../services/header.service';

@Component({
  moduleId: module.id,
  selector: 'project-header',
  templateUrl: 'project-header.component.html',
  styleUrls: ['project-header.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarUtilityComponent]
  //providers: [HeaderService]
})
export class ProjectHeaderComponent implements OnInit {

  organizations: Array<OrganizationModel> = [];
  private selectOrganization: OrganizationModel;

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
    this.selectOrganization = organization;
    console.log("new: " + organization.name);
    //console.log(this.router);
    //let link = [this.router.url, organization.name];
    let link = ['/organizations/edit-organization', organization.name];
    this.headerService.setOrganization(organization);
    //console.log("after : " + this.selectOrganization.name);
    this.router.navigate(link);
  }

  loadProjects() {
    this.dataService.organizations().getAll().subscribe(organizations => { this.organizations = organizations });
    this.selectOrganization = this.headerService.getOrganization();
    if (this.selectOrganization)
      console.log("creando... " + this.selectOrganization.name);
    else
      console.log("sin instancia de organizations.");
  }


}