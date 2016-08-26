import {Component, OnInit, OnDestroy, Input} from '@angular/core';

import {SidebarComponent} from '../sidebar';
import {EventsSidebarComponent} from '../events-sidebar';

import {NavbarService} from '../shared-services';
import {Subscription} from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'project-page',
  templateUrl: 'project-page.component.html',
  styleUrls: ['project-page.component.css']
})
export class ProjectPageComponent implements OnInit, OnDestroy {
  isCollapsed: boolean;
  subscription: Subscription;
  constructor(private navbarService: NavbarService) {
    this.subscription = navbarService.isCollapsed$.subscribe(isCollapsed => this.isCollapsed = isCollapsed);
  }
  ngOnInit() {

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
