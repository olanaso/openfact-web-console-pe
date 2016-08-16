/**
 * Created by AHREN on 10/08/2016.
 */

import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators, CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';

import {CertificateModel, DataService} from '../../../services';
import {Alert, AlertMessageService} from '../../../shared';


const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  moduleId: module.id,
  selector: 'app-certificate',
  templateUrl: 'certificate.component.html',
  styleUrls: ['certificate.component.css'],
  directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class CertificateComponent implements OnInit {

  certificate: CertificateModel;
  form: FormGroup;
  working: boolean = false;
  submitted: boolean = false;
  alerts: Array<Alert> = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private dataService: DataService,
              private alertMessageService: AlertMessageService) {
    this.certificate = this.activatedRoute.parent.snapshot.data['certificate'];
  }

  public uploader: FileUploader = new FileUploader({url: URL});
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
    (<FormControl>this.form.controls['alias']).updateValue(this.certificate.alias);
    (<FormControl>this.form.controls['password']).updateValue(this.certificate.password);
    (<FormControl>this.form.controls['passwordConfirmation']).updateValue(this.certificate.passwordConfirmation);
    (<FormControl>this.form.controls['validity']).updateValue(this.certificate.validity);
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

  save(certificate: CertificateModel) {
    /*Disable button*/
    this.working = true;

    this.certificate = Object.assign(this.certificate, certificate);

    this.certificate.save().subscribe(
      result => {
        this.alerts.push({
          type: 'success',
          message: 'certificate ' + certificate.alias + ' updated.'
        });
      },
      error => {
        this.working = false;
        this.alerts.push({
          type: 'error',
          message: 'certificate could not be create.',
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
