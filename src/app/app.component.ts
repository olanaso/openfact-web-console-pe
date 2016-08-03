import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavbarService } from './services/util/navbar.service';
import { DataService } from './services/data.service';
import { RestangularService } from './services/rest/restangular.service';
import { RestangularOpenfactService } from './services/rest/restangular-openfact.service';
import { OrganizationService } from './services/organization.service';
import { InvoiceService } from './services/invoice.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [NavbarService, DataService, RestangularService, RestangularOpenfactService, OrganizationService, InvoiceService]
})
export class AppComponent {

  private navbarService;

  constructor(navbarService: NavbarService) {
    this.navbarService = navbarService;
  }

}
