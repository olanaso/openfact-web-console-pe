import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as Collections from 'typescript-collections';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { DebitNote } from '../../core/models/debit-note.model';
import { Paging } from '../../core/models/paging.model';
import { OrderBy } from '../../core/models/order-by.model';
import { SearchResults } from '../../core/models/search-results.model';
import { SearchCriteria } from '../../core/models/search-criteria.model';
import { SearchCriteriaFilter } from '../../core/models/search-criteria-filter.model';
import { SearchCriteriaFilterOperator } from '../../core/models/search-criteria-filter-operator.model';

@Component({
  selector: 'of-debit-notes',
  templateUrl: './debit-notes.component.html',
  styleUrls: ['./debit-notes.component.scss']
})
export class DebitNotesComponent implements OnInit, OnDestroy {

  dataSubscription: Subscription;

  organization: Organization;
  searchResult: SearchResults<DebitNote> = new SearchResults<DebitNote>();

  thirdPartyByEmail: any = {};

  filters = {
    filterText: undefined,
    selected: new Collections.Dictionary<String, any>()
  };
  sorter = {
    selected: undefined,
    ascending: true
  };
  paging = {
    page: 1,
    size: 10
  };

  combo = {
    issueDate: [
      { name: 'Last Hour', value: 'lastHour' },
      { name: 'Last 24 Hours', value: 'last24Hours' },
      { name: 'Last Week', value: 'lastWeek' },
      { name: 'Last Month', value: 'lastMonth' },
      { name: 'Last Year', value: 'lastYear' },
      //{ name: 'Custom Interval...', value: 'custom', divider: true },
    ],
    orderBy: [
      { name: 'Issue Date', value: 'issueDateTime' },
      //{ name: 'Type Code', value: 'InvoiceTypeCode' }
    ]
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private dataService: DataService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.loadSorter();
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.organization = data["organization"];
      this.search();
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
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
    this.dataService.debitnotes().search(this.organization, criteria).subscribe(result => {
      this.searchResult = result;
    });
  }

  downloadXml(debitNote: DebitNote) {
    debitNote.downloadXml();
  }

  downloadCdr(debitNote: DebitNote) {
    this.dataService.organizationPeru().downloadDebitNoteCdr(this.organization.organization, debitNote.id);
  }

  downloadPdf(debitNote: DebitNote) {
    let queryParams: URLSearchParams = new URLSearchParams();
    queryParams.set("format", "pdf");
    debitNote.downloadReport(queryParams);
  }

  sendToCustomer(debitNote: DebitNote) {
    debitNote.sendToCustomer().subscribe(result => {
      this.alertService.pop('success', 'Success', 'Success! Debit Note sended to customer.');
    });
  }

  sendToThirdParty(debitNote: DebitNote) {
    debitNote.sendToThirdParty().subscribe(result => {
      this.alertService.pop('success', 'Success', 'Success! Debit Note sended to third party.');
    });
  }

  sendToCustomThridPartyByEmail(debitNote:DebitNote, content: any) {
    this.modalService.open(content).result.then((form: NgForm) => {
      if (form.valid) {
        debitNote.sendToThirdPartyByEmail({ email: form.value.thirdPartyByEmail.email }).subscribe(data => {
          this.alertService.pop('success', 'Success', 'Success! Debit Note sended to third party.');
        })
      }
    }, (reason) => {
    });
  }

}
