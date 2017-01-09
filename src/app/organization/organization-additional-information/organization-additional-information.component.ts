import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'of-organization-additional-information',
  templateUrl: './organization-additional-information.component.html',
  styleUrls: ['./organization-additional-information.component.scss']
})
export class OrganizationAdditionalInformationComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;

  private organization: Organization;

  private form: FormGroup;
  private working: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.organization = data["organization"];
      this.loadData();
    });

    this.buildForm();    
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
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

  save(value: any) {
    this.working = true;

    this.organization.save(value).subscribe(
      result => {
        this.working = false;
        this.form.markAsPristine();
        this.alertService.pop('success', 'Success', 'Your changes have been saved to the organization.');
      },
      error => {
        this.working = false;
      }
    );
  }

}
