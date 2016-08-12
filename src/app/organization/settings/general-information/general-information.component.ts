import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators, CORE_DIRECTIVES} from '@angular/common';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {OrganizationModel, DataService} from '../../../services';
import {Alert, AlertMessageService} from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'general-information',
  templateUrl: 'general-information.component.html',
  styleUrls: ['general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  organization: OrganizationModel;
  additionalAccountIds: string[] = ['DNI', 'RUC'];

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
    (<FormControl>this.form.controls['name']).setValue(this.organization.name);
    (<FormControl>this.form.controls['additionalAccountId']).setValue(this.organization.additionalAccountId);
    (<FormControl>this.form.controls['assignedIdentificationId']).setValue(this.organization.assignedIdentificationId);
    (<FormControl>this.form.controls['supplierName']).setValue(this.organization.supplierName);
    (<FormControl>this.form.controls['registrationName']).setValue(this.organization.registrationName);
    (<FormControl>this.form.controls['enabled']).setValue(this.organization.enabled);
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

    Object.assign(this.organization, organization);

    this.organization.save().subscribe(
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
    );;
  }

  reset() {    
    this.loadData();
  }

}
