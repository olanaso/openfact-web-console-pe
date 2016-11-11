import { Component, OnInit } from '@angular/core';

import { Organization, DataService, AlertService } from '../../../shared';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {

  private searchResult: Array<Organization> = new Array<Organization>();

  private filters = {
    filterText: undefined
  };

  constructor(
    private dataService: DataService,
    private alertService: AlertService) {
    this.search();
  }

  ngOnInit() {

  }

  search() {
    this.dataService.organizations().getAll().subscribe(
      result => {
        this.searchResult = result;
      }, error => {
        this.alertService.pop('error', 'Error', 'Error loading projects.');
      });
  }

}
