import { Component, ViewEncapsulation,ViewContainerRef } from '@angular/core';
import { HeaderComponent } from './layout/header';
import { SidebarComponent } from './layout/sidebar';
import { ContainerComponent } from './layout/container';
import { HTTP_PROVIDERS } from '@angular/http';

//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import './rxjs-operator';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css', '../styles/main.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [HeaderComponent, SidebarComponent, ContainerComponent],
  providers:[HTTP_PROVIDERS]  
})
export class AppComponent {
  title = 'app works!';
  private viewContainerRef:ViewContainerRef;
  public constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}
