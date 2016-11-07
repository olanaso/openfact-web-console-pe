import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Organization } from '../../../shared';
import { DataService, AlertService } from '../../../shared';

@Component({
  selector: 'app-organization-ubl-server',
  templateUrl: './organization-ubl-server.component.html',
  styleUrls: ['./organization-ubl-server.component.scss']
})
export class OrganizationUblServerComponent implements OnInit {

  private organization: Organization;

  private form: FormGroup;
  private working: boolean = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.activatedRoute.data.subscribe(result => {
      this.organization = <Organization>result['organization'];
    });
    this.buildForm();
    this.loadData();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      auth: [false],
      ublUsername: [undefined, Validators.compose([Validators.maxLength(150)])],
      ublPassword: [undefined, Validators.compose([Validators.maxLength(150)])]
    });
  }

  loadData() {
    this.form.patchValue(this.organization.ublSenderServer || {});
    this.form.markAsPristine();
  }

  save(value: any) {
    this.working = true;

    this.organization.save({ organization: this.organization.organization, ublSenderServer: value }).subscribe(
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
