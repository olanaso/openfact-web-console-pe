import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Organization } from '../../../shared';
import { DataService, AlertService } from '../../../shared';

@Component({
  selector: 'app-organization-themes',
  templateUrl: './organization-themes.component.html',
  styleUrls: ['./organization-themes.component.scss']
})
export class OrganizationThemesComponent implements OnInit {

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
      adminTheme: [undefined, Validators.compose([Validators.maxLength(60)])],
      emailTheme: [undefined, Validators.compose([Validators.maxLength(60)])],
      internationalizationEnabled: [false, Validators.compose([Validators.required, Validators.maxLength(60)])],
      supportedLocales: [undefined],
      defaultLocale: [undefined, Validators.compose([Validators.maxLength(60)])],
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
        this.alertService.pop('error', 'Error', 'Your changes could not saved to the organization.');
      }
    );
  }

}
