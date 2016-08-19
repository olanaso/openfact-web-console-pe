import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators} from '@angular/common';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {OrganizationModel, PostalAddress, DataService} from '../../../services';
import {AlertService} from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'address',
  templateUrl: 'address.component.html',
  styleUrls: ['address.component.css']
})
export class AddressComponent implements OnInit {

  organization: OrganizationModel;

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
  }

  buildForm() {
    this.form = this.formBuilder.group({
      countryIdentificationCode: ['', [<any>Validators.maxLength(30)]],
      countrySubentity: ['', [<any>Validators.maxLength(100)]],
      citySubdivisionName: ['', [<any>Validators.maxLength(100)]],
      cityName: ['', [<any>Validators.maxLength(100)]],
      district: ['', [<any>Validators.maxLength(200)]],
      streetName: ['', [<any>Validators.maxLength(200)]]
    });
  }

  loadData() {
    let postalAddress = <PostalAddress>(this.organization.postalAddress || {});
    (<FormControl>this.form.controls['countryIdentificationCode']).setValue(postalAddress.countryIdentificationCode);
    (<FormControl>this.form.controls['countrySubentity']).setValue(postalAddress.countrySubentity);
    (<FormControl>this.form.controls['citySubdivisionName']).setValue(postalAddress.citySubdivisionName);
    (<FormControl>this.form.controls['cityName']).setValue(postalAddress.cityName);
    (<FormControl>this.form.controls['district']).setValue(postalAddress.district);
    (<FormControl>this.form.controls['streetName']).setValue(postalAddress.streetName);
  }

  setSubmitted(submitted: boolean) {
    this.submitted = submitted;
  }

  preSave(): OrganizationModel {
    return Object.assign(this.organization, { postalAddress: this.form.value });
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
