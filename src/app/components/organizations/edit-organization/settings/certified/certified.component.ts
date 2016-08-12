/**
 * Created by AHREN on 10/08/2016.
 */

import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators} from '@angular/common';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder} from '@angular/forms';


/*Directives import*/
import {AlertsComponent} from '../../../../../shared/alerts';
import {ButtonSaveComponent} from '../../../../../shared/button-save';
import {ButtonCancelComponent} from '../../../../../shared/button-cancel';

import {DataService} from '../../../../../services/data.service';
import {AlertMessageService} from '../../../../../services/alert-message.service';

import {Alert} from '../../../../../services/alert';
import {CertifiedModel} from '../../../../../services/models/certified-model';

@Component({
  moduleId: module.id,
  selector: 'app-certified',
  templateUrl: 'certified.component.html',
  styleUrls: ['certified.component.css'],
  directives: [
    REACTIVE_FORM_DIRECTIVES,
    AlertsComponent,
    ButtonSaveComponent,
    ButtonCancelComponent
  ],
  providers: [FormBuilder]
})

export class CertifiedComponent implements OnInit {
  certified:CertifiedModel;
  form: FormGroup;
  working: boolean = false;
  submitted: boolean = false;
  alerts: Array<Alert> = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertMessageService: AlertMessageService) {
    this.certified = this.activatedRoute.parent.snapshot.data['certified'];
  }
  ngOnInit() {
    this.loadAlerts();
    this.buildForm();
    this.loadData();
  }
  loadData() {
    /*(<FormControl>this.form.controls['name']).updateValue(this.organization.name);
    (<FormControl>this.form.controls['supplierName']).updateValue(this.organization.supplierName);
    (<FormControl>this.form.controls['registrationName']).updateValue(this.organization.registrationName);
    (<FormControl>this.form.controls['additionalAccountId']).updateValue(this.organization.additionalAccountId);
    (<FormControl>this.form.controls['assignedIdentificationId']).updateValue(this.organization.assignedIdentificationId);   */
  }
  loadAlerts() {
    this.alertMessageService.getAlerts().forEach(alert => {
      this.alerts.push(alert);
    });
    this.alertMessageService.clearAlerts();
  }
  buildForm() {
   /* this.form = this.formBuilder.group({
      name: ['', []],
      supplierName: ['', []],
      registrationName: ['', []],
      additionalAccountId: ['', []],
      assignedIdentificationId: ['', []],
      enabled: ['', []]
    });*/
  }
  setSubmitted(submitted: boolean) {
    this.submitted = submitted;
  }
  save(certified: CertifiedModel) {
    /*Disable button*/
    this.working = true;

    this.certified = Object.assign(this.certified, certified);

    this.certified.save().subscribe(
      result => {
        this.alerts.push({
          type: 'success',
          message: 'Certified ' + certified.alias + ' updated.'
        });
      },
      error => {
        this.working = false;
        this.alerts.push({
          type: 'error',
          message: 'Certified could not be create.',
          details: error
        });
      }
    );
  }
  cancel() {
    let link = ['./overview'];
    this.router.navigate(link);
  }




}
