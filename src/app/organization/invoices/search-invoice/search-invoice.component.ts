import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as Collections from 'typescript-collections';

import { Organization, Invoice, DataService, AlertService } from '../../../shared';
import { SearchCriteria, SearchCriteriaFilter, SearchCriteriaFilterOperator, SearchResults, Paging, OrderBy } from '../../../shared';

@Component({
  selector: 'app-search-invoice',
  templateUrl: './search-invoice.component.html',
  styleUrls: ['./search-invoice.component.scss']
})
export class SearchInvoiceComponent implements OnInit {

  private organization: Organization;
  private searchResult: SearchResults<Invoice> = new SearchResults<Invoice>();

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
    size: 10
  };

  private combo = {
    issueDate: [
      { name: 'Last Hour', value: 'lastHour' },
      { name: 'Last 24 Hours', value: 'last24Hours' },
      { name: 'Last Week', value: 'lastWeek' },
      { name: 'Last Month', value: 'lastMonth' },
      { name: 'Last Year', value: 'lastYear' },
      { name: 'Custom Interval...', value: 'custom', divider: true },
    ],
    orderBy: [
      { name: 'Issue Date', value: 'issueDateTime' },
      { name: 'Type Code', value: 'invoiceTypeCode' }
    ]
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private alertService: AlertService) {
    this.organization = this.activatedRoute.snapshot.parent.parent.data['organization'];
    this.loadSorter();
    this.search();
  }

  ngOnInit() {
  }

  loadSorter(): void {
    this.sorter.selected = { name: 'Issue Date', value: 'issueDateTime' };
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

  changeIssueDateFilter(filter: any) {
    let greatherThan: SearchCriteriaFilter;
    let lessThan: SearchCriteriaFilter;

    let date = new Date();
    let filterValue = filter.value;
    switch (filterValue) {
      case 'any':
        greatherThan = undefined;
        lessThan = undefined;
        break;
      case 'lastHour':
        date.setHours(date.getHours() - 1);
        greatherThan = new SearchCriteriaFilter('issueDateTime', date, 'gt', 'DATETIME');
        lessThan = undefined;
        break;
      case 'last24Hours':
        date.setHours(date.getHours() - 24);
        greatherThan = new SearchCriteriaFilter('issueDateTime', date, 'gt', 'DATETIME');
        lessThan = undefined;
        break;
      case 'lastWeek':
        date.setDate(date.getDate() - 7);
        greatherThan = new SearchCriteriaFilter('issueDateTime', date, 'gt', 'DATETIME');
        lessThan = undefined;
        break;
      case 'lastMonth':
        date.setMonth(date.getMonth() - 1);
        greatherThan = new SearchCriteriaFilter('issueDateTime', date, 'gt', 'DATETIME');
        lessThan = undefined;
        break;
      case 'lastYear':
        date.setMonth(date.getMonth() - 12);
        greatherThan = new SearchCriteriaFilter('issueDateTime', date, 'gt', 'DATETIME');
        lessThan = undefined;
        break;
      case 'custom':
        throw new Error('Invalid issueDate period');
      default:
        throw new Error('Invalid issueDate period');
    }

    let filterSelected = {
      filter: filter,
      criterias: []
    };
    if (lessThan) {
      filterSelected.criterias.push(lessThan);
    }
    if (greatherThan) {
      filterSelected.criterias.push(greatherThan);
    }
    this.filters.selected.setValue('issueDate', filterSelected);

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

    //Send Request
    this.dataService.invoices().search(this.organization, criteria).subscribe(
      result => {
        this.searchResult = result;
      }, error => {
        this.alertService.pop('error', 'Error', 'Error loading invoices.');
      });
  }

}
