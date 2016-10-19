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
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      assignedIdentificationId: [this.organization.assignedIdentificationId, Validators.compose([Validators.required, Validators.maxLength(20)])],
      additionalAccountId: [this.organization.additionalAccountId, Validators.compose([Validators.required, Validators.maxLength(60)])],
      supplierName: [this.organization.supplierName, Validators.compose([Validators.required, Validators.maxLength(150)])],
      registrationName: [this.organization.registrationName, Validators.compose([Validators.required, Validators.maxLength(150)])],
      postalAddress: this.formBuilder.group({
        cityName: [this.organization.postalAddress.cityName, Validators.compose([Validators.maxLength(150)])],
        citySubdivisionName: [this.organization.postalAddress.citySubdivisionName, Validators.compose([Validators.maxLength(150)])],
        countryIdentificationCode: [this.organization.postalAddress.countryIdentificationCode, Validators.compose([Validators.maxLength(150)])],
        countrySubentity: [this.organization.postalAddress.countrySubentity, Validators.compose([Validators.maxLength(150)])],
        district: [this.organization.postalAddress.district, Validators.compose([Validators.maxLength(150)])],
        streetName: [this.organization.postalAddress.streetName, Validators.compose([Validators.maxLength(150)])],
      })
    });
  }

  preSave(): void {
    this.organization.assignedIdentificationId = this.form.value['assignedIdentificationId'];
    this.organization.additionalAccountId = this.form.value['additionalAccountId'];
    this.organization.supplierName = this.form.value['supplierName'];
    this.organization.registrationName = this.form.value['registrationName'];
  }

  save() {
    this.working = true;
    this.preSave();

    this.organization.save().subscribe(
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

}
