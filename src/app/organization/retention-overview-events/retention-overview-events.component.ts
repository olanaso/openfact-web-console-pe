/**
 * Created by lxpary on 15/12/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { Retention } from '../../core/models/retention.model';

@Component({
  selector: 'of-retention-overview-events',
  templateUrl: './retention-overview-events.component.html',
  styleUrls: ['./retention-overview-events.component.scss']
})
export class RetentionOverviewEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
