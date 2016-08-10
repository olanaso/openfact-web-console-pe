import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription }   from 'rxjs/Subscription';
import { NavbarService } from '../../services/navbar.service';

@Component({
  moduleId: module.id,
  selector: 'navbar-utility-mobile',
  templateUrl: 'navbar-utility-mobile.component.html',
  styleUrls: ['navbar-utility-mobile.component.css']
})
export class NavbarUtilityMobileComponent implements OnInit, OnDestroy {
  isCollapsed: boolean;
  subscription: Subscription;

  constructor(private navbarService: NavbarService) {
    this.subscription = navbarService.isCollapsed$.subscribe(isCollapsed => {
      this.isCollapsed = isCollapsed;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
