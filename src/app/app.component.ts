import {Component, ViewContainerRef} from '@angular/core';

import {Http, Headers,
  RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {KeycloakService} from './keycloak';

import {TranslateService} from 'ng2-translate/ng2-translate';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
 
  constructor(
    private viewContainerRef: ViewContainerRef,
    private _kc: KeycloakService,
    private http: Http,
    private translate: TranslateService
  ) {
    translate.addLangs(["en", "es"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');

  }

  products: string[] = [];

  logout() {
    this._kc.logout();
  }

  reloadData() {
    //angular dont have http interceptor yet

    this._kc.getToken().then(
      token => {
        let headers = new Headers({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token
        });

        // let options = new RequestOptions({ headers: headers });

        // this.http.get('/database/products', options)
        //   .map(res => <string[]>res.json())
        //   .subscribe(
        //   prods => this.products = prods,
        //   error => console.log(error));

      },
      error => {
        console.log(error);
      }
    );

  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }



}