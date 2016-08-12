import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {OrganizationModel} from '../../services';
import {Alert, AlertMessageService} from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.css']
})
export class OverviewComponent implements OnInit {

  organization: OrganizationModel;

  alerts: Array<Alert>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertMessageService: AlertMessageService) {
    this.activatedRoute.data.subscribe(result => {
      this.organization = <OrganizationModel>result;
    });
    this.alerts = [];
  }

  ngOnInit() {
    this.loadAlerts();
  }

  loadAlerts() {
    this.alertMessageService.getAlerts().forEach(alert => {
      this.alerts.push(alert);
    });
    this.alertMessageService.clearAlerts();
  }

}
