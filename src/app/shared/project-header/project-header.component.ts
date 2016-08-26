import {Component, OnInit, OnDestroy, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {HeaderService} from '../shared-services';
import {OrganizationModel, DataService} from '../../services';

import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap';

import {NavbarService} from '../shared-services';
import {Subscription} from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'project-header',
  templateUrl: 'project-header.component.html',
  styleUrls: ['project-header.component.css'],
  directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES]
})
export class ProjectHeaderComponent implements OnInit,OnDestroy {

  organizations: Array<OrganizationModel> = [];
  private selectOrganization: OrganizationModel;
  private beforeOrganization: OrganizationModel;
  isCollapsed: boolean;
  subscription: Subscription;

  constructor(
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute,
    private headerService: HeaderService,
    private navbarService: NavbarService) {
    this.subscription = navbarService.isCollapsed$.subscribe(isCollapsed => this.isCollapsed = isCollapsed);
  }

  ngOnInit() {
    this.loadProjects();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeCollapsed() {
   
    this.navbarService.changeCollapsed();
   // alert(this.isCollapsed);
  }
  changeOrganization(organization: OrganizationModel) {

    let link = ['/organization', organization.name];


    this.router.navigate(link);
  }

  loadProjects() {
    this.dataService.organizations().getAll().subscribe(organizations => { this.organizations = organizations });

  }


}
