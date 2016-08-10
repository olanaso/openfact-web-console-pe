/**
 * Created by AHREN on 10/08/2016.
 */
import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Router} from '@angular/router';
/**menu opénfact */
import {DefaultHeaderComponent} from '../../../shared/default-header';
import {NavbarUtilityMobileComponent} from '../../../shared/navbar-utility-mobile';
import {AlertsComponent} from '../../../shared/alerts';
import {ProjectHeaderComponent} from '../../../shared/project-header';
import {ProjectPageComponent} from '../../../shared/project-page';
/*services */
import {AlertMessageService} from '../../../services/alert-message.service';
//import {CertifiedService} from '../../../services/certified.service';

import {OrganizationProviderService} from '../../../services/providers/organization-provider.service';
/**models */
import {CertifiedModel} from '../../../services/models/certified-model';
import {OrganizationModel} from '../../../services/models/organization-model';

@Component({
  moduleId: module.id,
  selector: 'app-certifieds',
  templateUrl: 'certifieds.component.html',
  styleUrls: ['certifieds.component.css'],
  directives: [ROUTER_DIRECTIVES, DefaultHeaderComponent, NavbarUtilityMobileComponent, AlertsComponent, ProjectHeaderComponent
    , ProjectPageComponent],
  providers: [/*CertifiedService, */AlertMessageService, OrganizationProviderService],
})
export class CertifiedsComponent implements OnInit {

  certifieds:Array<CertifiedModel>;
  organizations:OrganizationModel;

  constructor(private router:Router,
              private alertMessageService:AlertMessageService,
              private organizationService:OrganizationProviderService
              /*private certifiedService:CertifiedService*/) {
    this.certifieds = [];
  }

  ngOnInit() {
    /*this.alertMessageService.getAlerts().forEach(function (alert) {
      this.alerts.push(alert);
    });
    this.alertMessageService.clearAlerts();
    this.loadCertifieds();

    this.organizationService.findById('master')
      .subscribe(result => this.organizations = result, error => this.alertMessageService.addAlert(undefined)); */   
  }
  /*loadCertifieds() {
    this.certifiedService.setPath("/organizations/master/certifieds");
    console.log(this.certifiedService.getPath());
    this.certifiedService.getAll()
      .subscribe(result => this.certifieds = result, error => this.alertMessageService.addAlert(undefined));
  }*/
}
