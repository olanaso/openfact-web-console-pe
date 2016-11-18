import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'of-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.scss']
})
export class CreateOrganizationComponent implements OnInit {

  form: FormGroup;
  working: boolean = false;

  organization: any;
  importing: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      organization: [null, Validators.compose([Validators.required, Validators.maxLength(60)])],
      description: [null, Validators.maxLength(250)]
    });
  }

  importFile(file) {
    this.organization = Object.assign({}, JSON.parse(file.data));
    this.form.patchValue(this.organization);
    this.importing = true;
  };

  save(form: any): void {
    this.working = true;
    let organizationCopy = Object.assign(this.organization, form);

    this.dataService.organizations().create(organizationCopy).subscribe(
      result => {
        this.alertService.pop('success', 'Success', 'Success! The organization has been created.');
        this.router.navigate(['../']);
      },
      error => {
        this.working = false;
        this.alertService.pop('error', 'Error', 'Organization could not be created.');
      }
    );
  }

  reset() {
    this.buildForm();
    this.organization = undefined;
    this.importing = false;
  }

  cancel() {
    this.router.navigate(['../']);
  }

}
