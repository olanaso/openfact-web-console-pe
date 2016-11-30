import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { Invoice } from '../../core/models/invoice.model';

@Component({
  selector: 'of-invoice-overview-events',
  templateUrl: './invoice-overview-events.component.html',
  styleUrls: ['./invoice-overview-events.component.scss']
})
export class InvoiceOverviewEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
