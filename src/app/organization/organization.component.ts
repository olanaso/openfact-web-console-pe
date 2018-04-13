import { SidebarComponent } from './sidebar/sidebar.component';
import { Component, OnInit, Renderer2, Inject, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationItemConfig } from 'patternfly-ng/navigation';
import { ContextItemConfig } from '../layout/vertical-navigation/context-item-config';
import { User, UserService } from './../ngx-login-client';
import { Contexts, Context, Organization, ExtendedOrganization, OrganizationService } from './../ngx-openfact/';
import { KeycloakService } from './../keycloak-service/keycloak.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'of-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit, OnDestroy {

  loggedInUser: User;

  contextItems: ContextItemConfig[];
  navigationItems: NavigationItemConfig[];

  organizations: ExtendedOrganization[] = [];

  sidebarCollapsed: boolean;

  @ViewChild(SidebarComponent)
  sidebar: SidebarComponent;

  private context: Context;
  private subscriptions: Subscription[] = [];

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private userService: UserService,
    private organizationService: OrganizationService,
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
    this.organizationService.searchCompaniesByUserid(this.loggedInUser.id).subscribe((val) => {
      this.organizations = val;
      this.initContextItems();
    });
  }

  initContextItems() {
    this.contextItems = this.organizations.map((company) => {
      return {
        title: company.name,
        url: '/_organization/' + company.id
      };
    });
  }

  initSidebarItems() {
    const company = this.context.organization;

    this.navigationItems = [
      {
        title: 'Documentos',
        iconStyleClass: 'fa fa-file-code-o',
        url: '/_organization/' + company.id + '/_documents'
      },
      {
        title: 'Observados',
        iconStyleClass: 'fa fa-edit',
        url: '/_organization/' + company.id + '/_drafts',
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
            url: '/_organization/' + company.id + '/_generalinformation'
          },
          {
            title: 'Información Adicional',
            url: '/_organization/' + company.id + '/_additionalinformation'
          },
          {
            title: 'Certificados Digitales',
            url: '/_organization/' + company.id + '/_keys'
          },
          {
            title: 'Correos Electrónicos',
            url: '/_organization/' + company.id + '/_smtp'
          },
          {
            title: 'Información SUNAT',
            url: '/_organization/' + company.id + '/_sunatinformation'
          }
        ]
      },
      {
        title: 'Home',
        iconStyleClass: 'pficon pficon-home',
        url: '/'
      },
    ];
  }

  onItemClicked($event: NavigationItemConfig): void {

  }

  onNavigation($event: NavigationItemConfig): void {

  }

  get contextLabel() {
    return this.context.organization.name;
  }

  logout() {
    this.keycloakService.logout();
  }

  toggleSidebar($event: boolean) {
    this.sidebarCollapsed = $event;
    this.sidebar.handleNavBarToggleClick();
  }
}
