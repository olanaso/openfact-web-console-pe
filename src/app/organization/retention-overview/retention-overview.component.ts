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
  selector: 'of-retention-overview',
  templateUrl: './retention-overview.component.html',
  styleUrls: ['./retention-overview.component.scss']
})
export class RetentionOverviewComponent implements OnInit {

  private retention: Retention;
  private retentionJson: Retention;
  private retentionText: Retention;

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService, private alertService: AlertService) {
    this.retention = this.activatedRoute.snapshot.data['retention'];
    this.retentionText = this.activatedRoute.snapshot.data['retentionText'];
    this.retentionJson = this.activatedRoute.snapshot.data['retentionJson'];
  }

  ngOnInit() {
  }

}
