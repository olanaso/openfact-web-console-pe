import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavbarService } from './services/util/navbar.service';

import { RestangularService } from './services/rest/restangular.service';
import { RestangularOpenfactService } from './services/rest/restangular-openfact.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [NavbarService, RestangularService, RestangularOpenfactService]
})
export class AppComponent {
  title = 'Repeid Web Console';

  constructor(private navbarService: NavbarService) {}

}
