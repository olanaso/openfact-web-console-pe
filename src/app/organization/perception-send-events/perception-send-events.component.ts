/**
 * Created by lxpary on 15/12/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { Perception } from '../../core/models/perception.model';

@Component({
  selector: 'of-perception-send-events',
  templateUrl: './perception-send-events.component.html',
  styleUrls: ['./perception-send-events.component.scss']
})
export class PerceptionSendEventsComponent implements OnInit {

  private organization: any;
  private perception: any;

  events: Array<any>;

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService, private alertService: AlertService) {
    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.perception = this.activatedRoute.snapshot.data['perception'];
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    let perception: Perception = this.dataService.perceptions().build(this.organization, this.perception.codigoUnico);
    this.dataService.perceptions().getSendEvents(perception).subscribe(
      result => {
        this.events = result;
      },
      error => {
        this.alertService.pop('error', 'Error', 'Perception could not be created.');
      }
    );;
  }

  downloadFile(file) {
    this.dataService.storageFiles().sunatDownload(this.organization, file.id);
  }

}
