import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

/*Directives import*/
import {AlertsComponent} from '../../../shared/alerts';
import {ButtonDeleteComponent} from '../../../shared/button-delete';
import {DefaultHeaderComponent} from '../../../shared/default-header';
import {NavbarUtilityMobileComponent} from '../../../shared/navbar-utility-mobile';

/*Models import*/
import {Alert} from '../../../services/alert';
import {OrganizationModel} from '../../../services/models/organization-model';

/*Services import*/
import {AlertMessageService} from '../../../services/alert-message.service';
import {DataService} from '../../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'organization-list',
  templateUrl: 'list-organization.component.html',
  styleUrls: ['list-organization.component.css'],
  directives: [
    DefaultHeaderComponent,
    NavbarUtilityMobileComponent,
    AlertsComponent,
    ButtonDeleteComponent
  ]
})
export class ListOrganizationComponent implements OnInit {

  organizations: Array<OrganizationModel>;
  alerts: Array<Alert>;

  constructor(
    private router: Router,
    private alertMessageService: AlertMessageService,
    private dataService: DataService) {
    this.organizations = [];
    this.alerts = [];
  }

  ngOnInit() {
    this.loadAlerts();
    this.loadOrganizations();
  }

  loadAlerts() {
    this.alertMessageService.getAlerts().forEach(alert => {
      this.alerts.push(alert);
    });
    this.alertMessageService.clearAlerts();
  }

  loadOrganizations() {
    this.dataService.organizations().getAll().subscribe(
      result => {
        this.organizations = result;
      }, error => {
        this.alerts.push({
          type: 'error',
          message: 'Error loading projects ',
          details: 'Something happend when loading projects.',
          links: [{
            label: 'Retry',
            href: './'
          }]
        });
      });
  }

  editOrganization(organization: OrganizationModel) {
    let link = ['/organizations/edit-organization', organization.name];
    this.router.navigate(link);
  }

}
