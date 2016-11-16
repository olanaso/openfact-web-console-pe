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

  private form: FormGroup;
  private working: boolean = false;

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

  save(form: any): void {
    this.working = true;

    this.dataService.organizations().create(form).subscribe(
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

  cancel() {
    this.router.navigate(['../']);
  }

}
