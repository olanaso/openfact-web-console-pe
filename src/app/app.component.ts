import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavbarService } from './services/navbar.service';
import { DataService } from './services/data.service';
import { RestangularService } from './services/providers/restangular.service';
import { RestangularOpenfactService } from './services/providers/restangular-openfact.service';
import { OrganizationProviderService } from './services/providers/organization-provider.service';
import { InvoiceProviderService } from './services/providers/invoice-provider.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [NavbarService, DataService, RestangularService, RestangularOpenfactService, OrganizationProviderService, InvoiceProviderService]
})
export class AppComponent {

  private navbarService;

  constructor(navbarService: NavbarService) {
    this.navbarService = navbarService;
  }

}
