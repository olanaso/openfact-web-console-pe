import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';

import { NavbarUtilityComponent } from '../navbar-utility';

import { OrganizationModel } from '../../../services/models/organization-model';
import { AlertMessageService } from '../../../services/alert-message.service';
import { Alert } from '../../../services/alert';
import { HeaderService } from '../../../services/header.service';

@Component({
  moduleId: module.id,
  selector: 'project-header',
  templateUrl: 'project-header.component.html',
  styleUrls: ['project-header.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarUtilityComponent],
  providers: [HeaderService]
})
export class ProjectHeaderComponent implements OnInit {

  organizations: Array<OrganizationModel> = [];
  selectOrganization: OrganizationModel;

  constructor(
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute,
    private headerService: HeaderService) {
    console.log(this.route);      
    //this.selectOrganization=this.dataService.organizations.
  }

  ngOnInit() {
    this.loadProjects();
    this.route.params
      .map(params => params['organization'])
      .subscribe((organization) => {
        console.log("hooolaa: "+organization);
        
        // this.contactsService
        //   .getContact(id)
        //   .subscribe(contact => this.contact = contact);
      });


    //console.log("Aqui probando...: " + this.headerService.getOrganization());
  }

  changeOrganization(organization: OrganizationModel) {
    //console.log(JSON.stringify(organization));
    let link = ['/organizations/edit-organization', organization.name];
    this.headerService.setOrganization(organization);
    this.router.navigate(link);
    // console.log("Aqui probando...: " + JSON.stringify(this.headerService.getOrganization()));
  }

  loadProjects() {
    this.dataService.organizations().getAll().subscribe(organizations => { this.organizations = organizations });
  }


}
