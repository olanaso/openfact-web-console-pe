import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';
import { Validators } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import 'rxjs/Rx';

import { DefaultHeaderComponent } from '../../../../util/default-header';
import { ButtonSaveComponent } from '../../../../util/button-save';
import { ButtonCancelComponent } from '../../../../util/button-cancel';
import { AlertsComponent } from '../../../../util/alerts';

import { DataService } from '../../../../../services/data.service';
import { AlertMessageService } from '../../../../../services/alert-message.service';

import { Alert } from '../../../../../services/alert';
import { OrganizationModel } from '../../../../../services/models/organization-model';

@Component({
  moduleId: module.id,
  selector: 'app-general-information',
  templateUrl: 'general-information.component.html',
  styleUrls: ['general-information.component.css'],
  directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, DefaultHeaderComponent, ButtonSaveComponent, ButtonCancelComponent, AlertsComponent],
  providers: [DataService]
})
export class GeneralInformationComponent implements OnInit {
  form: FormGroup;
  working: boolean = false;
  submitted: boolean = false;
  alerts: Array<Alert> = [];
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertMessageService: AlertMessageService) { }

  ngOnInit() {
    this.loadAlerts();
    this.buildForm();
  }
  loadAlerts() {
    this.alertMessageService.getAlerts().forEach(alert => {
      this.alerts.push(alert.data);
    });
    this.alertMessageService.clearAlerts();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [<any>Validators.required, <any>Validators.maxLength(60)]],
      supplierName: ['', [<any>Validators.required, <any>Validators.maxLength(60)]],

      ruc: ['', [<any>Validators.required, <any>Validators.maxLength(60)]],
      telefono: ['', [<any>Validators.required, <any>Validators.maxLength(60)]],

      email: ['', [<any>Validators.required, <any>Validators.maxLength(60)]],
      paginaWeb: ['', [<any>Validators.required, <any>Validators.maxLength(60)]],

      observacion: ['', [<any>Validators.required, <any>Validators.maxLength(60)]],



    });
  }
  setSubmitted(submitted: boolean) {
    this.submitted = submitted;
  }
  save(organization: OrganizationModel) {
    // /*Disable button*/
    // this.working = true;

    // /*Create the object to be send*/
    // organization = Object.assign(this.dataService.organizations().build(), organization);

    // /*Call to the service*/
    // this.dataService.organizations().create(organization).subscribe(
    //   result => {
    //     this.alertMessageService.addShortAlert('success', 'Organization ' + organization.name + ' was created.');
    //     let link = ['/organizations'];
    //     this.router.navigate(link);
    //   },
    //   error => {
    //     this.working = false;
    //     this.alerts.push({
    //       type: 'error',
    //       message: 'Organizations could not be create.',
    //       details: error
    //     });
    //   }
    // );
  }

  cancel() {
    let link = ['/overview'];
    this.router.navigate(link);
  }
}
