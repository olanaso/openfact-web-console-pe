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
  }

  ngOnInit() {
  }

  buildForm() {    
    this.form = this.formBuilder.group({
      organization: [this.organization.organization, Validators.compose([Validators.required, Validators.maxLength(60)])],
      description: [this.organization.description, Validators.maxLength(250)],
      enabled: [this.organization.enabled, Validators.required],
    });
  }

  changeEnabled(enabled: boolean) {
    this.form.controls['enabled'].setValue(enabled);
    this.form.markAsDirty();
  }

  preSave(): void {    
    this.organization.organization = this.form.value['organization'];
    this.organization.description = this.form.value['description'];
    this.organization.enabled = this.form.value['enabled'];
  }

  save() {
    this.working = true;
    this.preSave();

    this.organization.save().subscribe(
      result => {
        this.working = false;
        this.alertService.pop('success', 'Success', 'Your changes have been saved to the organization.');
      },
      error => {
        this.working = false;
        this.alertService.pop('error', 'Error', 'Your changes could not saved to the organization.');
      }
    );
  }

}
