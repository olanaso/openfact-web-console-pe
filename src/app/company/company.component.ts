import { KeycloakService } from './../keycloak-service/keycloak.service';
import { Component, OnInit } from '@angular/core';
import { NavigationItemConfig } from 'patternfly-ng/navigation';
import { ContextItemConfig } from '../layout/vertical-navigation/context-item-config';
import { User, UserService } from './../ngx-login-client';
import { Contexts, Context, Company, CompanyService } from './../ngx-openfact/';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'of-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  loggedInUser: User;

  contextItems: ContextItemConfig[];
  navigationItems: NavigationItemConfig[];

  companies: Company[] = [];

  private context: Context;
  private subscriptions: Subscription[] = [];

  constructor(
    private userService: UserService,
    private companyService: CompanyService,
    private contexts: Contexts,
    private KeycloakService: KeycloakService
  ) {
    this.subscriptions.push(
      this.userService.loggedInUser.subscribe((val) => {
        this.loggedInUser = val;
        this.fetchCompanies();
      })
    );

    this.subscriptions.push(
      this.contexts.current.subscribe((val) => {
        this.context = val;
      })
    );
  }

  ngOnInit(): void {
    this.navigationItems = [
      {
        title: 'Documentos',
        iconStyleClass: 'fa fa-dashboard',
        url: './documents'
      },
      {
        title: 'Observados',
        iconStyleClass: 'fa fa-shield',
        url: './drafts',
        badges: [
          {
            count: 1283,
            tooltip: 'Total number of items'
          }
        ]
      },
      {
        title: 'Configuraciones',
        iconStyleClass: 'fa fa-space-shuttle',
        children: [
          {
            title: 'Información general',
            url: './general-information'
          },
          {
            title: 'Información adicional',
            url: './additional-information'
          },
          {
            title: 'Certificados Digitales',
            url: './keys'
          },
          {
            title: 'Servidor Correos SMTP',
            url: './smtp'
          },
          {
            title: 'Impresion',
            url: './smtp'
          },
          {
            title: 'Envíos automáticos',
            url: './smtp'
          },
          {
            title: 'Servicios Web SUNAT',
            url: './web-services-sunat'
          }
        ]
      }
    ];
  }

  fetchCompanies() {
    Observable.forkJoin(
      this.companyService.getCompanies(this.loggedInUser.id, 'owner'),
      this.companyService.getCompanies(this.loggedInUser.id, 'collaborator')
    ).subscribe((val) => {
      this.companies = val[0].concat(val[1]);
      this.initContextItems();
    });
  }

  initContextItems() {
    this.contextItems = this.companies.map((company) => {
      return {
        title: company.name,
        url: '/_company/' + company.id
      };
    });
  }

  onItemClicked($event: NavigationItemConfig): void {

  }

  onNavigation($event: NavigationItemConfig): void {

  }

  get contextLabel() {
    return this.context.company.name;
  }

  logout() {
    this.KeycloakService.logout();
  }

}
