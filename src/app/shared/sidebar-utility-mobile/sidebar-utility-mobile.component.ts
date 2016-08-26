import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import {NavbarService} from '../shared-services';
import {Subscription} from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'sidebar-utility-mobile',
  templateUrl: 'sidebar-utility-mobile.component.html',
  styleUrls: ['sidebar-utility-mobile.component.css']
})
export class SidebarUtilityMobileComponent implements OnInit, OnDestroy {
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
