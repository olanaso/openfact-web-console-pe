import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'of-organization-themes',
  templateUrl: './organization-themes.component.html',
  styleUrls: ['./organization-themes.component.scss']
})
export class OrganizationThemesComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;

  private organization: Organization;
  private serverinfo: any;

  private form: FormGroup;
  private working: boolean = false;

  private supportedLocales = ["en", "es"];

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
      this.serverinfo = data["serverinfo"];
      this.loadData();
    });

    this.buildForm();    
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      emailTheme: [""],
      reportTheme: [""],
      internationalizationEnabled: [false, Validators.compose([Validators.required])],
      supportedLocales: [],
      defaultLocale: ["en", Validators.compose([Validators.maxLength(3)])]
    });
  }

  loadData() {
    this.form.patchValue(this.organization);
    this.form.markAsPristine();
  }

  refreshSupportedLocalesSelectValue(values: [any]) {
    this.form.patchValue({
      supportedLocales: values.map(f => f.id)
    });
  }

  save(form: any) {
    this.working = true;

    this.organization.save(form).subscribe(
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
