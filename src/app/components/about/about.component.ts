import { Component, OnInit } from '@angular/core';
import { DefaultHeaderComponent } from '../../directives/default-header';
import { NavbarUtilityMobileComponent } from '../../directives/navbar-utility-mobile';
import { ConstantService } from '../../services/constant.service';
import { AuthService } from '../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: [DefaultHeaderComponent, NavbarUtilityMobileComponent],
  providers: [ConstantService, AuthService]
})
export class AboutComponent implements OnInit {
  version: any;
  constructor(
    constantService: ConstantService,
    authService: AuthService) {
    
    authService.withUser();

    this.version = {
      master: {
        openshift: constantService.VERSION.openshift,
        kubernetes: constantService.VERSION.kubernetes,
      }
    };
  }

  ngOnInit() {
    
  }

}
