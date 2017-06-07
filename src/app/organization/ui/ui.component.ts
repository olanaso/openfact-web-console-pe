import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Organization } from '../../core/model/organization.model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/data/data.service';
import { AlertService } from 'app/core/alert/alert.service';

@Component({
  selector: 'openfact-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class OrganizationUIComponent implements OnInit, OnDestroy {

  dataSubscription: Subscription;

  organization: Organization;
  organizations: Array<Organization>;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.dataSubscription = this.route.data.subscribe(
      (data) => {
        this.organization = data['organization'];
      }
    );
    this.loadAllowedOrganizations();
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  loadAllowedOrganizations() {
    this.dataService.organizations().getAll().subscribe(
      (data) => {
        this.organizations = data;
      }
    );
  }

}
