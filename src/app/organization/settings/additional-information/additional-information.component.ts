import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Organization } from '../../../shared';
import { DataService, AlertService } from '../../../shared';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.scss']
})
export class AdditionalInformationComponent implements OnInit {

  private organization: Organization;

  private form: FormGroup;
  private working: boolean = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.organization = this.activatedRoute.snapshot.parent.parent.data['organization'];
    this.buildForm();
    this.loadData();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      assignedIdentificationId: [undefined, Validators.compose([Validators.required, Validators.maxLength(20)])],
      additionalAccountId: [undefined, Validators.compose([Validators.required, Validators.maxLength(60)])],
      supplierName: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
      registrationName: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
      postalAddress: this.formBuilder.group({
        cityName: [undefined, Validators.compose([Validators.maxLength(150)])],
        citySubdivisionName: [undefined, Validators.compose([Validators.maxLength(150)])],
        countryIdentificationCode: [undefined, Validators.compose([Validators.maxLength(150)])],
        countrySubentity: [undefined, Validators.compose([Validators.maxLength(150)])],
        district: [undefined, Validators.compose([Validators.maxLength(150)])],
        streetName: [undefined, Validators.compose([Validators.maxLength(150)])],
      })
    });
  }

  loadData() {
    this.form.patchValue(this.organization);
    this.form.markAsPristine();
  }

  preSave(): void {
    this.organization.assignedIdentificationId = this.form.get('assignedIdentificationId').value;
    this.organization.additionalAccountId = this.form.get('additionalAccountId').value;
    this.organization.supplierName = this.form.get('supplierName').value;
    this.organization.registrationName = this.form.get('registrationName').value;
    this.organization.postalAddress.cityName = this.form.get('postalAddress').get('cityName').value;
    this.organization.postalAddress.citySubdivisionName = this.form.get('postalAddress').get('citySubdivisionName').value;
    this.organization.postalAddress.countryIdentificationCode = this.form.get('postalAddress').get('countryIdentificationCode').value;
    this.organization.postalAddress.countrySubentity = this.form.get('postalAddress').get('countrySubentity').value;
    this.organization.postalAddress.district = this.form.get('postalAddress').get('district').value;
    this.organization.postalAddress.streetName = this.form.get('postalAddress').get('streetName').value;
  }

  save() {
    this.working = true;
    this.preSave();

    this.organization.save().subscribe(
      result => {
        this.working = false;
        this.form.markAsPristine();
        this.alertService.pop('success', 'Success', 'Your changes have been saved to the organization.');
      },
      error => {
        this.working = false;
        this.alertService.pop('error', 'Error', 'Your changes could not saved to the organization.');
      }
    );
  }

}
