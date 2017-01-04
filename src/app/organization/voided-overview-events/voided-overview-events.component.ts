/**
 * Created by lxpary on 03/01/17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { Voided } from '../../core/models/voided.model';

@Component({
  selector: 'of-voided-overview-events',
  templateUrl: './voided-overview-events.component.html',
  styleUrls: ['./voided-overview-events.component.scss']
})
export class VoidedOverviewEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
