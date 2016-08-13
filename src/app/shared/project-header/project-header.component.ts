import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Alert, AlertMessageService, HeaderService} from '../shared-services';
import {OrganizationModel, DataService} from '../../services';

@Component({
  moduleId: module.id,
  selector: 'project-header',
  templateUrl: 'project-header.component.html',
  styleUrls: ['project-header.component.css']
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
    this.selectOrganization = organization;
    console.log("new: " + JSON.stringify(this.headerService.getBeforeOrganization()));
    this.beforeOrganization = this.headerService.getBeforeOrganization();
    //console.log(this.router.url);
    if (!this.beforeOrganization) {
      this.beforeOrganization = organization;
    }
    // if(this.selectOrganization){
    //   this.sele
    // }
    //let link = [this.router.url, organization.name];
    //let link = ['/organizations/edit-organization', organization.name];
    let url = String(this.route.url);
    let lin = url.split(this.beforeOrganization.name).join(this.selectOrganization.name);
    let link = [lin];
    this.headerService.setOrganization(organization);

    console.log("after : " + JSON.stringify(lin));
    this.router.navigate(link);
  }

  loadProjects() {
    this.dataService.organizations().getAll().subscribe(organizations => { this.organizations = organizations });
    this.selectOrganization = this.headerService.getOrganization();
    // if (this.selectOrganization)
    //console.log("creando... " + this.selectOrganization.name+new Date());
    //else
    //console.log("sin instancia de organizations.");
  }


}
