import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators, CORE_DIRECTIVES} from '@angular/common';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {OrganizationModel, DataService} from '../../../services';
import {Alert, AlertMessageService} from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-general-information',
  templateUrl: 'general-information.component.html',
  styleUrls: ['general-information.component.css'],
  directives: [
    REACTIVE_FORM_DIRECTIVES
  ],
  providers: [FormBuilder]
})
export class GeneralInformationComponent implements OnInit {

  organization: OrganizationModel;

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
    this.organization = this.activatedRoute.parent.snapshot.data['organization'];
  }

  ngOnInit() {
    this.loadAlerts();
    this.buildForm();
    this.loadData();
  }

  loadData() {
    (<FormControl>this.form.controls['name']).updateValue(this.organization.name);
    (<FormControl>this.form.controls['supplierName']).updateValue(this.organization.supplierName);
    (<FormControl>this.form.controls['registrationName']).updateValue(this.organization.registrationName);
    (<FormControl>this.form.controls['additionalAccountId']).updateValue(this.organization.additionalAccountId);
    (<FormControl>this.form.controls['assignedIdentificationId']).updateValue(this.organization.assignedIdentificationId);
    //this.form.setValue(this.organization);
  }

  loadAlerts() {
    this.alertMessageService.getAlerts().forEach(alert => {
      this.alerts.push(alert);
    });
    this.alertMessageService.clearAlerts();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: ['', []],
      supplierName: ['', []],
      registrationName: ['', []],
      additionalAccountId: ['', []],
      assignedIdentificationId: ['', []],
      enabled: ['', []]
    });
  }

  setSubmitted(submitted: boolean) {
    this.submitted = submitted;
  }

  save(organization: OrganizationModel) {
    /*Disable button*/
    this.working = true;

    this.organization = Object.assign(this.organization, organization);

    this.organization.save().subscribe(
      result => {
        this.alerts.push({
          type: 'success',
          message: 'Organization ' + organization.name + ' updated.'
        });
      },
      error => {
        this.working = false;
        this.alerts.push({
          type: 'error',
          message: 'Organizations could not be create.',
          details: error
        });
      }
    );;
  }

  cancel() {
    let link = ['./overview'];
    this.router.navigate(link);
  }

}
