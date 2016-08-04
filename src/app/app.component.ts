import { Component, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavbarService } from './services/util/navbar.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [NavbarService]
})
export class AppComponent {

  title = 'Repeid Web Console';
  viewContainerRef: ViewContainerRef;
  constructor(private navbarService: NavbarService, viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }

}
