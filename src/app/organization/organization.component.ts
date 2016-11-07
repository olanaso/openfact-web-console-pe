import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Organization, DataService, AlertService } from '../shared';

@Component({
  selector: 'organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  private organization: Organization;
  private organizations: Array<Organization>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private alertService: AlertService) {
    this.activatedRoute.data.subscribe(result => {
      this.organization = <Organization>result['organization'];
    });
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    this.dataService.organizations().getAll().subscribe(
      result => {
        this.organizations = result;
      },
      error => {
        this.alertService.pop('error', 'Error', 'Could not loaded organizations.');
      }
    );
  }

}
