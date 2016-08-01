import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { NavbarUtilityComponent } from '../navbar-utility';

import { Subscription }   from 'rxjs/Subscription';
import { NavbarService } from '../../services/navbar.service';

@Component({
  moduleId: module.id,
  selector: 'default-header',
  templateUrl: 'default-header.component.html',
  styleUrls: ['default-header.component.css'],
  directives: [NavbarUtilityComponent]
})
export class DefaultHeaderComponent implements OnInit, OnDestroy {
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

  changeCollapsed() {
    this.navbarService.changeCollapsed();
  }

}
