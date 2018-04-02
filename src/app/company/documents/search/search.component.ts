import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Contexts, Company } from './../../../ngx-openfact';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'of-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  company: Company;

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contexts: Contexts
  ) {
    this.contexts.current.subscribe((val) => {
      this.company = val.company;
    })
  }

  ngOnInit() {
  }

  newInvoice() {
    this.router.navigate(['_company', this.company.id, '_documents', '_newinvoice']);
  }

  newCreditNote() {
    this.router.navigate(['_company', this.company.id, '_documents', '_newcreditnote']);
  }

  newDebitNote() {
    this.router.navigate(['_company', this.company.id, '_documents', '_newdebitnote']);
  }
}
