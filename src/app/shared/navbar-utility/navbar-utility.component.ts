import {Component, OnInit} from '@angular/core';
import {Http, Headers,
  RequestOptions, Response} from '@angular/http';
import {TranslateService} from 'ng2-translate/ng2-translate';
@Component({
  moduleId: module.id,
  selector: 'navbar-utility',
  templateUrl: 'navbar-utility.component.html',
  styleUrls: ['navbar-utility.component.css']
})
export class NavbarUtilityComponent implements OnInit {

  constructor(private http: Http, private translate: TranslateService) {

    translate.addLangs(["en", "es"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  ngOnInit() {
    
  }

}
