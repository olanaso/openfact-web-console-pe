import * as Collections from 'typescript-collections';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Document } from './../../core/model/document.model';
import { OrderBy } from './../../core/model/order-by.model';
import { Organization } from './../../core/model/organization.model';
import { Paging } from './../../core/model/paging.model';
import { SearchResults } from './../../core/model/search-results.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'of-invoice-list',
  templateUrl: './invoice-list.component.html',
  styles: []
})
export class InvoiceListComponent implements OnInit {

  dataSubscription: Subscription;

  organization: Organization;
  searchResult: SearchResults<Document> = new SearchResults<Document>();

  thirdPartyByEmail: any = {};

  filters = {
    filterText: undefined,
    typeCode: undefined,
    selected: new Collections.Dictionary<String, any>()
  };
  orderBy: OrderBy = {
    name: undefined,
    ascending: true
  };
  paging: Paging = {
    page: 1,
    pageSize: 10
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  createNewInvoice() {
    this.router.navigate(['./create'], { relativeTo: this.route });
  }

}
