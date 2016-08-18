import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import 'rxjs/Rx';

import { OrganizationModel, DataService } from '../../services';
import { AlertService } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'organization-create',
  templateUrl: 'create-organization.component.html',
  styleUrls: ['create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {

  organization: OrganizationModel;

  form: FormGroup;
  working: boolean = false;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.organization = this.dataService.organizations().build();
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [<any>Validators.required, <any>Validators.maxLength(60)]],
      description: ['', [<any>Validators.maxLength(300)]]
    });
  }

  setSubmitted(submitted: boolean) {
    this.submitted = submitted;
  }

  preSave(): OrganizationModel {
    return Object.assign(this.organization, this.form.value);
  }

  save() {
    this.working = true;
    let organization = this.preSave();

    this.dataService.organizations().create(organization).subscribe(
      result => {
        this.alertService.pop('success', 'Success', 'Success! The organization has been created.');
        this.router.navigate(['/organization', this.organization.name]);
      },
      error => {
        this.working = false;
        this.alertService.pop('error', 'Error', 'Organization could not be created.');
      }
    );
  }

  cancel() {
    let link = ['/organizations'];
    this.router.navigate(link);
  }

}
