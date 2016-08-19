import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators} from '@angular/common';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {OrganizationModel, PostalAddress, DataService} from '../../../services';
import {Alert, AlertMessageService} from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'address',
  templateUrl: 'address.component.html',
  styleUrls: ['address.component.css']
})
export class AddressComponent implements OnInit {

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
    this.organization = this.activatedRoute.parent.parent.snapshot.data['organization'];
  }

  ngOnInit() {
    this.loadAlerts();
    this.buildForm();
    this.loadData();
  }

  loadAlerts() {
    this.alertMessageService.getAlerts().forEach(alert => {
      this.alerts.push(alert);
    });
    this.alertMessageService.clearAlerts();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      streetName: ['', []],
      citySubdivisionName: ['', []],
      cityName: ['', []],
      countrySubentity: ['', []],
      district: ['', []],
      countryIdentificationCode: ['', []]
    });
  }

  loadData() {
    let address = <PostalAddress>(this.organization.postalAddress || {});
    (<FormControl>this.form.controls['streetName']).setValue(address.streetName);
    (<FormControl>this.form.controls['citySubdivisionName']).setValue(address.citySubdivisionName);
    (<FormControl>this.form.controls['cityName']).setValue(address.cityName);
    (<FormControl>this.form.controls['countrySubentity']).setValue(address.countrySubentity);
    (<FormControl>this.form.controls['district']).setValue(address.district);
    (<FormControl>this.form.controls['countryIdentificationCode']).setValue(address.countryIdentificationCode);
  }  
  
  setSubmitted(submitted: boolean) {
    this.submitted = submitted;
  }

  save(address: PostalAddress) {
    /*Disable button*/
    this.working = true;

    Object.assign(this.organization.postalAddress, address);

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
    );
  }

  reset() {
    this.loadData(); 
  }

}
