import { Component, OnInit, Renderer2, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationItemConfig } from 'patternfly-ng/navigation';
import { ContextItemConfig } from '../layout/vertical-navigation/context-item-config';
import { User, UserService } from './../ngx-login-client';
import { Contexts, Context, Organization, OrganizationService } from './../ngx-openfact/';
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

  companies: Organization[] = [];

  private context: Context;
  private subscriptions: Subscription[] = [];

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private userService: UserService,
    private companyService: OrganizationService,
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
    this.companyService.searchCompaniesByUserid(this.loggedInUser.id).subscribe((val) => {
      const master = val.master;
      const owned = val.owned;
      const collaborated = val.collaborated;
      this.companies = (master ? [master] : []).concat(owned).concat(collaborated);

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
        iconStyleClass: 'fa fa-file-code-o',
        url: '/_company/' + company.id + '/_documents'
      },
      {
        title: 'Observados',
        iconStyleClass: 'fa fa-edit',
        url: '/_company/' + company.id + '/_drafts',
        badges: [
          {
            count: 1283,
            tooltip: 'Total number of items'
          }
        ]
      },
      {
        title: 'Configuración',
        iconStyleClass: 'pficon pficon-settings',
        children: [
          {
            title: 'Información General',
            url: '/_company/' + company.id + '/_generalinformation'
          },
          {
            title: 'Información Adicional',
            url: '/_company/' + company.id + '/_additionalinformation'
          },
          {
            title: 'Certificados Digitales',
            url: '/_company/' + company.id + '/_keys'
          },
          {
            title: 'Correos Electrónicos',
            url: '/_company/' + company.id + '/_smtp'
          },
          {
            title: 'Envíos a la SUNAT',
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
