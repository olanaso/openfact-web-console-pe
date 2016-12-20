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
  selector: 'of-perception-overview',
  templateUrl: './perception-overview.component.html',
  styleUrls: ['./perception-overview.component.scss']
})
export class PerceptionOverviewComponent implements OnInit {

  private perception: Perception;
  private perceptionJson: Perception;
  private perceptionText: Perception;

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService, private alertService: AlertService) {
    this.perception = this.activatedRoute.snapshot.data['perception'];
    this.perceptionJson = this.activatedRoute.snapshot.data['perceptionJson'];
    this.perceptionText = this.activatedRoute.snapshot.data['perceptionText'];
  }

  ngOnInit() {
  }

}
