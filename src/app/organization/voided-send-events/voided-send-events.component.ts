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
  selector: 'of-voided-send-events',
  templateUrl: './voided-send-events.component.html',
  styleUrls: ['./voided-send-events.component.scss']
})
export class VoidedSendEventsComponent implements OnInit {

  private organization: any;
  private voided: any;

  events: Array<any>;

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService, private alertService: AlertService) {
    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.voided = this.activatedRoute.snapshot.data['voided'];
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    let voided: Voided = this.dataService.voideds().build(this.organization, this.voided.codigoUnico);
    this.dataService.voideds().getSendEvents(voided).subscribe(
      result => {
        this.events = result;
      },
      error => {
        this.alertService.pop('error', 'Error', 'Voided could not be created.');
      }
    );;
  }

  downloadFile(file) {
    this.dataService.storageFiles().sunatDownload(this.organization, file.id);
  }

}
