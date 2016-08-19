import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators, CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';
import {OrganizationModel, Certificate, DataService} from '../../../services';
import {Alert, EqualValidator, AlertService} from '../../../shared';

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
  hasCertificate: boolean = false;
  alerts: Array<Alert> = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private dataService: DataService,
              private alertMessageService: AlertService) {
    this.organization = this.activatedRoute.parent.parent.snapshot.data['organization'];
  }

  ngOnInit() {
    this.buildForm();
    this.loadData();
    this.loadUpload();
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  upload(e: any) {
    e.upload();
    this.loadData();
  }

  cancel(e: any) {
    e.cancel();
  }

  remove(e: any) {
    e.remove();
    this.deleteUpload();
  }

  loadUpload() {
    this.uploader = this.organization.uploadCertificate();
    /*this.uploader.onSuccessItem = function (fileItem, response, status, headers) {
     console.info('onSuccessItem', fileItem, response, status, headers);
     this.alerts.push({
     type: 'success',
     message: 'Success',
     details: 'Your certificate has upload been saved to the organization.'
     });
     this.working = false;
     };
     this.uploader.onErrorItem = function (fileItem, response, status, headers) {
     console.info('onErrorItem', fileItem, response, status, headers);
     this.alerts.push({
     type: 'error',
     message: 'Error',
     details: response
     });
     };
     */
  }

  loadData() {
    this.organization.getCertificate().subscribe(
      result => {
        let certificate = <Certificate>(result || {});
        this.hasCertificate = certificate.hasCertificate;
        console.log(this.hasCertificate);
        (<FormControl>this.form.controls['alias']).updateValue(certificate.alias);
        (<FormControl>this.form.controls['password']).updateValue(certificate.password);
        (<FormControl>this.form.controls['passwordConfirmation']).updateValue(certificate.passwordConfirmation);
        (<FormControl>this.form.controls['validity']).updateValue(certificate.validity);
        (<FormControl>this.form.controls['hasCertificate']).updateValue(certificate.hasCertificate);

        if (certificate.hasCertificate) {
          console.log("1.0 " + certificate.certificate);
          let mimetype = certificate.fileType;
          console.log("2.0 " + mimetype);
          let file = new File([certificate.certificate], certificate.fileName, {type: mimetype});
          console.log("3.0 " + JSON.stringify(file));
          this.uploader.queue.push({
            file: file,
            isUploaded: true,
            isSuccess: true,
            progress: 100
          });
        }
      },
      error => {
        console.log("Imposible recuperar datos de Certificado")
      }
    );
  }

  buildForm() {
    this.form = this.formBuilder.group({
      alias: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(100)])],
      passwordConfirmation: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(100)])],
      validity: ['', Validators.required],
      hasCertificate: ['', []]
    });
  }


  setSubmitted(submitted: boolean) {
    this.submitted = submitted;

  }

  save(certificate: Certificate) {
    /*Disable button*/
    this.working = true;
    /*Object.assign(this.organization.certificate, certificate);*/
    certificate.hasCertificate = false;
    this.organization.saveCertificate(certificate).subscribe(
      result => {
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

  deleteUpload() {

  }

  reset() {
    this.loadData();
    /* this.uploader.cancelAll();
     this.uploader.clearQueue();*/
  }


}