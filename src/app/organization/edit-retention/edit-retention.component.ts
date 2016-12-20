/**
 * Created by lxpary on 15/12/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

import { Retention } from '../../core/models/retention.model';

@Component({
  selector: 'of-edit-retention',
  templateUrl: './edit-retention.component.html',
  styleUrls: ['./edit-retention.component.scss']
})
export class EditRetentionComponent implements OnInit {

  private retention: Retention;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.retention = this.activatedRoute.snapshot.data['retention'];
  }

  ngOnInit() {
  }

  downloadXml() {
    this.retention.downloadXml();
  }

  downloadPdf() {
    this.retention.downloadPdf();
  }

  sendToCustomer() {
    this.retention.sendToCustomer().subscribe(
      result => {
        this.alertService.pop('success', 'Success', 'Success! Retention sended to customer.');
      },
      error => {
        this.alertService.pop('error', 'Error', 'Organization could not be created.');
      }
    );
  }

  sendToThirdParty() {
    this.retention.sendToThirdParty().subscribe(
      result => {
        this.alertService.pop('success', 'Success', 'Success! Retention sended to third party.');
      },
      error => {
        this.alertService.pop('error', 'Error', 'Organization could not be created.');
      }
    );
  }

}
