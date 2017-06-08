import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { Organization } from '../../../../core/model/organization.model';
import { DataService } from '../../../../core/data/data.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'of-settings-theme',
  templateUrl: './settings-theme.component.html',
  styles: [`
    form {
      margin-top: 20px;
    }
  `]
})
export class SettingsThemeComponent implements OnInit, OnDestroy {

  dataSubscription: Subscription;

  organization: Organization;
  serverInfo: any;

  form: FormGroup;
  working = false;

  supportedLocales = ['en', 'es'];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private dataService: DataService,
              private toastr: ToastsManager) {
  }

  ngOnInit() {
    this.buildForm();
    this.dataSubscription = this.route.data.subscribe(data => {
      this.organization = data['organization'];
      this.serverInfo = data['serverInfo'];
      this.loadData();
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      emailTheme: [''],
      reportTheme: [''],
      internationalizationEnabled: [false, Validators.compose([Validators.required])],
      supportedLocales: [],
      defaultLocale: ['en', Validators.compose([Validators.maxLength(3)])]
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

  save(form: FormGroup) {
    this.working = true;

    this.organization.save(form.value).subscribe(
      result => {
        this.working = false;
        this.form.markAsPristine();
        this.toastr.success('Success! Your changes have been saved to the organization.');
      },
      error => {
        this.working = false;
      }
    );
  }

}
