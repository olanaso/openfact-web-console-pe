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
  companyImageView: any = "/assets/img/your-logo-here.png";
  imageData = true;

  form: FormGroup;
  formup: FormGroup;
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
      this.loadImage();
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
      defaultLocale: ['en', Validators.compose([Validators.maxLength(3)])],
      reportTitle: ['']
    });

    this.formup = this.formBuilder.group({
      fileName: [''],
      file: ['']
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
  onFileChange($event) {
    let regex = new RegExp("(.*?)\.(jpg|png|jpeg)$");
    let correctfile = regex.test($event.fileName);
    if (!correctfile) {
      this.toastr.warning('Warning! The file extension is not as required.');
      return;
    }
    this.formup.patchValue({
      file: $event.data,
      fileName: $event.fileName
    });
    this.companyImageView = $event.data;
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

  loadImage() {
    this.organization.restangular.all('avatars').all('logo').get()
      .map(response => { return response["_body"]; })
      .subscribe(result => {
        if (result) {
          this.companyImageView = 'data:image/png;base64,' + result;
          this.formup.patchValue({
            file: this.companyImageView,
            fileName: this.organization.organization + ".png"
          });
        }
      });
  }

  upload(form: FormGroup) {
    this.working = true;
    this.organization.restangular.all('avatars').all('logo').post(form.value).subscribe(
      result => {
        this.working = false;
        this.formup.markAsPristine();
        this.toastr.success('Success! Your changes have been saved to the organization.');
      },
      error => {
        this.working = false;
      }
    );
  }

}
