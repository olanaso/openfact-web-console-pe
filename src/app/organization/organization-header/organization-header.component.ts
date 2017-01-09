import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from 'ng2-translate';

import { KeycloakService } from '../../core/keycloak.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'of-organization-header',
  templateUrl: './organization-header.component.html',
  styleUrls: ['./organization-header.component.scss']
})
export class OrganizationHeaderComponent implements OnInit {

  @Input()
  private currentOrganization: Organization;

  @Input()
  private organizations: Array<Organization>;

  private username: string;
  private authz: any;

  private selectedLanguage: string;
  private supportedLanguages: string[];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.authz = KeycloakService.auth.authz;
    this.username = this.authz.tokenParsed.username;

    if (this.currentOrganization.internationalizationEnabled == true) {
      this.changeLanguage(this.currentOrganization.defaultLocale || this.translate.currentLang || "en");
    } else {
      this.changeLanguage(this.translate.getDefaultLang());
    }
    this.supportedLanguages = this.translate.getLangs();
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    this.selectedLanguage = language;
  }

  accountManagement() {
    this.authz.accountManagement();
  }

  logout() {
    this.authz.logout();
  }

}
