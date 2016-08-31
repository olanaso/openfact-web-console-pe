import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {KeycloakService} from '../../keycloak';
@Component({
  moduleId: module.id,
  selector: 'navbar-utility',
  templateUrl: 'navbar-utility.component.html',
  styleUrls: ['navbar-utility.component.css']
})
export class NavbarUtilityComponent implements OnInit {
  user_name;
  constructor(private http: Http, private translate: TranslateService, private _kc: KeycloakService) {

    translate.addLangs(["en", "es"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    this.user_name=KeycloakService.auth.authz.idTokenParsed.preferred_username;
  }

  ngOnInit() {
    
  }

  logout() {
    KeycloakService.auth.authz.logout();

  }

}
