import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators} from '@angular/common';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {OrganizationModel, DocumentModel, ADDITIONAL_IDENTIFICATION_ID, DataService} from '../../../services';
import {AlertService} from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'general-information',
  templateUrl: 'general-information.component.html',
  styleUrls: ['general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  organization: OrganizationModel;
  additionalAccountIds: Array<DocumentModel> = [];

  form: FormGroup;
  working: boolean = false;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.organization = this.activatedRoute.parent.parent.snapshot.data['organization'];
  }

  ngOnInit() {
    this.buildForm();
    this.loadData();
    this.loadAdditionalAccountIds();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [<any>Validators.required, <any>Validators.maxLength(60)]],
      supplierName: ['', [<any>Validators.maxLength(150)]],
      registrationName: ['', [<any>Validators.maxLength(150)]],
      additionalAccountId: ['', [<any>Validators.maxLength(120)]],
      assignedIdentificationId: ['', [<any>Validators.maxLength(20)]],
      enabled: ['', [<any>Validators.required]]
    });
  }

  loadData() {
    (<FormControl>this.form.controls['name']).setValue(this.organization.name);
    (<FormControl>this.form.controls['additionalAccountId']).setValue(this.organization.additionalAccountId);
    (<FormControl>this.form.controls['assignedIdentificationId']).setValue(this.organization.assignedIdentificationId);
    (<FormControl>this.form.controls['supplierName']).setValue(this.organization.supplierName);
    (<FormControl>this.form.controls['registrationName']).setValue(this.organization.registrationName);
    (<FormControl>this.form.controls['enabled']).setValue(this.organization.enabled);
  }

  loadAdditionalAccountIds() {
    this.organization.getDocuments(ADDITIONAL_IDENTIFICATION_ID).subscribe(result => {
      this.additionalAccountIds = result;
    });
  }

  setSubmitted(submitted: boolean) {
    this.submitted = submitted;
  }

  chagenEnabled(enabled: boolean) {
    (<FormControl>this.form.controls['enabled']).setValue(enabled);
  }

  preSave(): OrganizationModel {
    return Object.assign(this.organization, this.form.value);
  }

  save() {
    this.working = true;
    let organization = this.preSave();

    organization.save().subscribe(
      result => {
        this.working = false;
        this.alertService.pop('success', 'Success', 'Your changes have been saved to the organization.');
      },
      error => {
        this.working = false;
        this.alertService.pop('error', 'Error', 'Your changes could not saved to the organization.');
      }
    );
  }

  reset() {
    this.loadData();
  }

}
