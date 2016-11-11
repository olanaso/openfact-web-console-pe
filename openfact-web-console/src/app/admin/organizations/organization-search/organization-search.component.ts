import { Component, OnInit } from '@angular/core';

import * as Collections from 'typescript-collections';

import { Organization, DataService, AlertService } from '../../../shared';

@Component({
  selector: 'app-organization-search',
  templateUrl: './organization-search.component.html',
  styleUrls: ['./organization-search.component.scss']
})
export class OrganizationSearchComponent implements OnInit {

  private searchResult: Array<Organization> = new Array<Organization>();

  private filters = {
    filterText: undefined
  };

  constructor(
    private dataService: DataService,
    private alertService: AlertService) {
    //this.search();
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
