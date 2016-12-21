/**
 * Created by lxpary on 14/12/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

import { Perception } from '../../core/models/perception.model';

@Component({
  selector: 'of-edit-perception',
  templateUrl: './edit-perception.component.html',
  styleUrls: ['./edit-perception.component.scss']
})
export class EditPerceptionComponent implements OnInit {

  private perception: Perception;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.perception = this.activatedRoute.snapshot.data['perception'];
  }

  ngOnInit() {
  }

  downloadXml() {
    this.perception.downloadXml();
  }

  downloadPdf() {
    this.perception.downloadPdf();
  }

  sendToCustomer() {
    this.perception.sendToCustomer().subscribe(
      result => {
        this.alertService.pop('success', 'Success', 'Success! Perception sended to customer.');
      },
      error => {
        this.alertService.pop('error', 'Error', 'Organization could not be created.');
      }
    );
  }

  sendToThirdParty() {
    this.perception.sendToThirdParty().subscribe(
      result => {
        this.alertService.pop('success', 'Success', 'Success! Perception sended to third party.');
      },
      error => {
        this.alertService.pop('error', 'Error', 'Organization could not be created.');
      }
    );
  }

}
