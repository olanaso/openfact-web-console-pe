import { Component, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavbarService } from './services/navbar.service';
import { DataService } from './services/data.service';
import { OrganizationProviderService } from './services/providers/organization-provider.service';
import { InvoiceProviderService } from './services/providers/invoice-provider.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [NavbarService, DataService, OrganizationProviderService, InvoiceProviderService]
})
export class AppComponent {


  title = 'Repeid Web Console';
  viewContainerRef: ViewContainerRef; 

  constructor(private navbarService: NavbarService, viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
    this.navbarService = navbarService;
  }

}
