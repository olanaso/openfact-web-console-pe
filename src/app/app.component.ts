import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from './layout/header';
import { SidebarComponent } from './layout/sidebar';
import { ContainerComponent } from './layout/container';
import { HTTP_PROVIDERS } from '@angular/http';
import {CollapseDirective} from 'ng2-bootstrap';
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import './rxjs-operator';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css', '../styles/main.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [HeaderComponent, SidebarComponent, ContainerComponent, CollapseDirective],
  providers: [HTTP_PROVIDERS]
})
export class AppComponent {
  title = 'app works!';
  private viewContainerRef: ViewContainerRef;
  public isCollapsed: boolean = false;
  public classSidebar: string;
  public classContent: string;

  colapse() {
    if (!this.isCollapsed) {
      this.classSidebar = "nav-pf-vertical nav-pf-vertical-with-secondary-nav";
      this.classContent = "container-fluid container-cards-pf container-pf-nav-pf-vertical container-pf-nav-pf-vertical-with-secondary";
    } else {
      this.classSidebar = "nav-pf-vertical nav-pf-vertical-with-secondary-nav collapsed";
      this.classContent = "container-fluid container-cards-pf container-pf-nav-pf-vertical container-pf-nav-pf-vertical-with-secondary collapsed-nav";
    }
  }

  public constructor(viewContainerRef: ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
    this.classSidebar = "nav-pf-vertical nav-pf-vertical-with-secondary-nav";
    this.classContent = "container-fluid container-cards-pf container-pf-nav-pf-vertical container-pf-nav-pf-vertical-with-secondary";
  }
}
