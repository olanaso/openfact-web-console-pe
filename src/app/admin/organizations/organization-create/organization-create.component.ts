import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Organization, DataService, AlertService } from '../../../shared';

@Component({
  selector: 'app-create-organization',
  templateUrl: './organization-create.component.html',
  styleUrls: ['./organization-create.component.scss']
})
export class OrganizationCreateComponent implements OnInit {

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
        this.router.navigate(['/organizations']);
      },
      error => {
        this.working = false;
        this.alertService.pop('error', 'Error', 'Organization could not be created.');
      }
    );
  }

  cancel() {
    this.router.navigate(['/organizations']);
  }

}
