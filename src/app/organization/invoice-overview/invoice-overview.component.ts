import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { Invoice } from '../../core/models/invoice.model';

@Component({
  selector: 'of-invoice-overview',
  templateUrl: './invoice-overview.component.html',
  styleUrls: ['./invoice-overview.component.scss']
})
export class InvoiceOverviewComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;

  private invoice: Invoice;
  private invoiceJson: Observable<Invoice>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.invoice = data["invoice"];
      this.invoice.getJsonRepresentation().subscribe(data => {
        this.invoiceJson = data;
      });
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

}
