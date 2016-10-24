import { Component, OnInit } from '@angular/core';

import * as Collections from 'typescript-collections';

import { Organization, DataService, AlertService } from '../../../shared';
import { SearchCriteria, SearchCriteriaFilter, SearchCriteriaFilterOperator, SearchResults, Paging, OrderBy } from '../../../shared';

@Component({
  selector: 'app-search-organization',
  templateUrl: './search-organization.component.html',
  styleUrls: ['./search-organization.component.scss']
})
export class SearchOrganizationComponent implements OnInit {

  private searchResult: SearchResults<Organization> = new SearchResults<Organization>();

  private filters = {
    filterText: undefined,
    selected: new Collections.Dictionary<String, any>()
  };
  private sorter = {
    selected: undefined,
    ascending: true
  };
  private paging = {
    page: 1,
    size: 8
  };

  private combo = {
    orderBy: [
      { name: 'Name', value: 'name' },
      { name: 'Supplier Name', value: 'supplierName' },
      { name: 'Registration Name', value: 'registrationName' }
    ]
  };

  constructor(
    private dataService: DataService,
    private alertService: AlertService) {
    this.loadSorter();
    this.search();
  }

  ngOnInit() {
  }

  loadSorter(): void {
    this.sorter.selected = { name: 'Name', value: 'name' };
  }

  changeSorter(sorter: any): void {
    this.sorter.selected = sorter;
    this.search();
  }

  changePagination(page: number): void {
    this.paging.page = page;
    this.search();
  }

  changeAscending(): void {
    this.sorter.ascending = !this.sorter.ascending;
    this.search();
  }

  clearFilters(): void {
    this.filters.selected.clear();
    this.search();
  }

  search() {
    let criteria = new SearchCriteria();
    criteria.filterText = this.filters.filterText;

    // Put filters
    criteria.filters = [];
    let filterAttributes = ['issueDate', 'payableAmount'];
    filterAttributes.forEach(attributeName => {
      if (this.filters.selected.containsKey(attributeName)) {
        let filter = this.filters.selected.getValue(attributeName);
        if (filter.criterias) {
          filter.criterias.forEach(element => {
            criteria.filters.push(element);
          });
        }
      }
    });
    
    // Put OrderBy
    criteria.orders = [
      new OrderBy(this.sorter.selected.value, this.sorter.ascending)
    ];

    // Put Paging
    criteria.paging = new Paging(this.paging.page, this.paging.size);

    this.dataService.organizations().search(criteria).subscribe(
      result => {
        this.searchResult = result;
      }, error => {
        this.alertService.pop('error', 'Error', 'Error loading projects.');
      });
  }
}
