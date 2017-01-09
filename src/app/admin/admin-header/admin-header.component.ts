import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../../core/keycloak.service';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'of-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  private username: string;
  private authz: any;

  private selectedLanguage: string;
  private supportedLanguages: string[];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.authz = KeycloakService.auth.authz;
    this.username = KeycloakService.auth.authz.tokenParsed.username;

    this.selectedLanguage = this.translate.currentLang;
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
