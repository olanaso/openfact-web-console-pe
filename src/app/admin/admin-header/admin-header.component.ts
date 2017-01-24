import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import { KeycloakService } from '../../core/keycloak.service';

@Component({
  selector: 'of-admin-header',
  templateUrl: './admin-header.component.html',
  styles: []
})
export class AdminHeaderComponent implements OnInit {

  user: any = {
    username: ""
  };

  authz: any;

  selectedLanguage: string;
  supportedLanguages: string[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService) { }

  ngOnInit() {
    this.authz = KeycloakService.auth.authz;
    this.user.username = KeycloakService.auth.authz.tokenParsed.username;

    this.selectedLanguage = this.translate.currentLang;
    this.supportedLanguages = this.translate.getLangs();
  }

  about() {
    let url = this.router.createUrlTree(["./", { outlets: { secondary: "about" } }]);
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

}
