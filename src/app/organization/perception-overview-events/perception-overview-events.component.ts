/**
 * Created by lxpary on 14/12/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { Perception } from '../../core/models/perception.model';

@Component({
  selector: 'of-perception-overview-events',
  templateUrl: './perception-overview-events.component.html',
  styleUrls: ['./perception-overview-events.component.scss']
})
export class PerceptionOverviewEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
