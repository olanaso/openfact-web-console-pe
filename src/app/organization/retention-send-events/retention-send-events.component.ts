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
  selector: 'of-retention-send-events',
  templateUrl: './retention-send-events.component.html',
  styleUrls: ['./retention-send-events.component.scss']
})
export class RetentionSendEventsComponent implements OnInit {

  private organization: any;
  private retention: any;

  events: Array<any>;

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService, private alertService: AlertService) {
    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.retention = this.activatedRoute.snapshot.data['retention'];
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    let retention: Retention = this.dataService.retentions().build(this.organization, this.retention.id);
    this.dataService.retentions().getSendEvents(retention).subscribe(
      result => {
        this.events = result;
      },
      error => {
        this.alertService.pop('error', 'Error', 'Perception could not be created.');
      }
    );;
  }

  downloadFile(file) {
    this.dataService.storageFiles().download(this.organization, file.id);
  }

}
