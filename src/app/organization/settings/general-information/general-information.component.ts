import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Organization } from '../../../shared';
import { DataService, AlertService } from '../../../shared';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent implements OnInit {

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
      organization: [undefined, Validators.compose([Validators.required, Validators.maxLength(60)])],
      description: [undefined, Validators.maxLength(250)],
      enabled: [false, Validators.required],
    });    
  }

  loadData() {
    this.form.patchValue(this.organization);
    this.form.markAsPristine();
  }

  preSave(): void {
    this.organization.organization = this.form.get('organization').value;
    this.organization.description = this.form.get('description').value;
    this.organization.enabled = this.form.get('enabled').value;
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
