import { REALM } from './../../../config/realm.token';
import { AUTH_API_URL } from './../../../config/auth-api';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';

import { KeycloakOAuthService } from '../../../keycloak/keycloak.oauth.service';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'of-admin-header',
  templateUrl: './admin-header.component.html',
  styles: []
})
export class AdminHeaderComponent implements OnInit {

  user: any = {
    username: ''
  };

  authz: any;

  selectedLanguage: string;
  supportedLanguages: string[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private translate: TranslateService,
               @Inject(AUTH_API_URL) private apiUrl: string,
               @Inject(REALM) private realm: string,) {
  }

  ngOnInit() {
    this.authz = KeycloakOAuthService.auth.authz;
    this.user.username = KeycloakOAuthService.auth.authz.tokenParsed.username;

    this.selectedLanguage = this.translate.currentLang;
    this.supportedLanguages = this.translate.getLangs();
  }

  about() {
    const url = this.router.createUrlTree(['./', { outlets: { popup: 'about' } }]);
    this.router.navigateByUrl(url, { relativeTo: this.route });
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

  keycloak() {
    window.open(this.apiUrl + '/admin/' + this.realm + '/console');
  }

}
