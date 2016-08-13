/**
 * Created by AHREN on 10/08/2016.
 */

import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators, CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';

import {CertifiedModel, DataService} from '../../../services';
import {Alert, AlertMessageService} from '../../../shared';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  moduleId: module.id,
  selector: 'app-certified',
  templateUrl: 'certified.component.html',
  styleUrls: ['certified.component.css']
})

export class CertifiedComponent implements OnInit {

  certified: CertifiedModel;
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

  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
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
    this.form = this.formBuilder.group({
      alias: ['', []],
      certificate: ['', []],
      password: ['', []],
      passwordConfirmation: ['', []],
      validity: ['', []]
    });
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
