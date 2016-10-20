import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Organization } from '../../../shared';
import { DataService, AlertService } from '../../../shared';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

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
      host: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
      port: [undefined, Validators.compose([Validators.maxLength(20)])],
      from: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
      ssl: [false, Validators.compose([Validators.required])],
      starttls: [false, Validators.compose([Validators.required])],
      auth: [false],
      smtpUsername: [undefined, Validators.compose([Validators.maxLength(150)])],
      smtpPassword: [undefined, Validators.compose([Validators.maxLength(150)])]
    });
  }

  loadData() {
    console.log(this.form);
    
    this.form.patchValue(this.organization.smtpServer || {});
    this.form.markAsPristine();
  }

  preSave(): void {
    this.organization.smtpServer = this.form.value;
  }

  save() {
    this.working = true;
    this.preSave();

    this.organization.save().subscribe(
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
