import { Component, OnInit, Renderer2, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationItemConfig } from 'patternfly-ng/navigation';
import { ContextItemConfig } from '../layout/vertical-navigation/context-item-config';
import { User, UserService } from './../ngx-login-client';
import { Contexts, Context, Company, CompanyService } from './../ngx-openfact/';
import { KeycloakService } from './../keycloak-service/keycloak.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'of-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit, OnDestroy {

  loggedInUser: User;

  contextItems: ContextItemConfig[];
  navigationItems: NavigationItemConfig[];

  companies: Company[] = [];

  private context: Context;
  private subscriptions: Subscription[] = [];

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private userService: UserService,
    private companyService: CompanyService,
    private contexts: Contexts,
    private keycloakService: KeycloakService
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
        this.initSidebarItems();
      })
    );
  }

  ngOnInit() {
    this.renderer.addClass(document.body.parentNode, 'layout-pf');
    this.renderer.addClass(document.body.parentNode, 'layout-pf-fixed');
    this.renderer.addClass(document.body.parentNode, 'transitions');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body.parentNode, 'layout-pf');
    this.renderer.removeClass(document.body.parentNode, 'layout-pf-fixed');
    this.renderer.removeClass(document.body.parentNode, 'transitions');
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

  initSidebarItems() {
    const company = this.context.company;

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
        title: 'Configuración',
        iconStyleClass: 'fa fa-space-shuttle',
        children: [
          {
            title: 'Información general',
            url: '/_company/' + company.id + '/_general-information'
          },
          {
            title: 'Información adicional',
            url: '/_company/' + company.id + '/_additional-information'
          },
          {
            title: 'Certificados Digitales',
            url: '/_company/' + company.id + '/_smtp-settings'
          },
          {
            title: 'Servidor Correos SMTP',
            url: '/_company/' + company.id + '/_smtp-settings'
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

  onItemClicked($event: NavigationItemConfig): void {

  }

  onNavigation($event: NavigationItemConfig): void {

  }

  get contextLabel() {
    return this.context.company.name;
  }

  logout() {
    this.keycloakService.logout();
  }

}
