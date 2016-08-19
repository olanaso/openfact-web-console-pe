/**
 * Created by AHREN on 10/08/2016.
 */

import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators, CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';

import {OrganizationModel, Certificate, DataService} from '../../../services';
import {Alert, EqualValidator, AlertMessageService} from '../../../shared';


const URL = 'http://localhost:8080/admin/organizations/master/certifieds/upload';

@Component({
  moduleId: module.id,
  selector: 'app-certificate',
  templateUrl: 'certificate.component.html',
  styleUrls: ['certificate.component.css'],
  directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES, EqualValidator]
})

export class CertificateComponent implements OnInit {

  organization: OrganizationModel;
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean = false;
  form: FormGroup;
  working: boolean = false;
  submitted: boolean = false;
  alerts: Array<Alert> = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private dataService: DataService,
              private alertMessageService: AlertMessageService) {
    this.organization = this.activatedRoute.parent.parent.snapshot.data['organization'];
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  ngOnInit() {
    this.loadAlerts();
    this.buildForm();
    this.loadData();
  }

  loadData() {
    this.uploader = new FileUploader({url: URL});
    let certificate = <Certificate>(this.organization.certificate || {});
    (<FormControl>this.form.controls['alias']).updateValue(certificate.alias);
    (<FormControl>this.form.controls['password']).updateValue(certificate.password);
    (<FormControl>this.form.controls['passwordConfirmation']).updateValue(certificate.passwordConfirmation);
    (<FormControl>this.form.controls['validity']).updateValue(certificate.validity);
    /*     (<FormControl>this.form.controls['assignedIdentificationId']).updateValue(this.certificate.assignedIdentificationId);  */
  }

  loadAlerts() {
    this.alertMessageService.getAlerts().forEach(alert => {
      this.alerts.push(alert);
    });
    this.alertMessageService.clearAlerts();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      alias: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      /*certificate: ['', Validators.required],*/
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(100)])],
      passwordConfirmation: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(100)])],
      validity: ['', Validators.required]
    });
  }


  setSubmitted(submitted: boolean) {
    this.submitted = submitted;

  }

  save(certificate: Certificate) {
    /*Disable button*/
    this.working = true;
   /* Object.assign(this.organization, certificate);*/


    this.organization.saveCertificate(certificate).subscribe(
      result => {
        /*this.uploader.uploadAll();*/
        this.alerts.push({
          type: 'success',
          message: 'Success',
          details: 'Your changes have been saved to the organization.'
        });
        this.working = false;
      },
      error => {
        this.working = false;
        this.alerts.push({
          type: 'error',
          message: 'Error',
          details: 'Your changes could not saved to the organization.'
        });
      }
    );
  }

  reset() {
    this.loadData();
   /* this.uploader.cancelAll();
    this.uploader.clearQueue();*/
  }


}
