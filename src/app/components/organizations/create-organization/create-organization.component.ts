import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Router} from '@angular/router';
import {Validators, CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder} from '@angular/forms';

import 'rxjs/Rx';

import {TOOLTIP_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

/*Directives import*/
import {AlertsComponent} from '../../../shared/alerts';
import {ButtonSaveComponent} from '../../../shared/button-save';
import {ButtonCancelComponent} from '../../../shared/button-cancel';
import {DefaultHeaderComponent} from '../../../shared/default-header';
import {NavbarUtilityMobileComponent} from '../../../shared/navbar-utility-mobile';

import {DataService} from '../../../services/data.service';
import {AlertMessageService} from '../../../services/alert-message.service';

import {Alert} from '../../../services/alert';
import {OrganizationModel} from '../../../services/models/organization-model';

@Component({
  moduleId: module.id,
  selector: 'organization-create',
  templateUrl: 'create-organization.component.html',
  styleUrls: ['create-organization.component.css'],
  directives: [
    REACTIVE_FORM_DIRECTIVES,
    DefaultHeaderComponent,
    NavbarUtilityMobileComponent,
    AlertsComponent,
    ButtonSaveComponent,
    ButtonCancelComponent
  ],
  providers: [FormBuilder]
})
export class CreateOrganizationComponent implements OnInit {

  form: FormGroup;
  working: boolean = false;
  submitted: boolean = false;

  alerts: Array<Alert> = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertMessageService: AlertMessageService) {
 }

  ngOnInit() {
    this.loadAlerts();
    this.buildForm();
 }

  loadAlerts() {
    this.alertMessageService.getAlerts().forEach(alert => {
      this.alerts.push(alert);
   });
    this.alertMessageService.clearAlerts();
 }

  buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [<any>Validators.required, <any>Validators.maxLength(60)]]
   });
 }

  setSubmitted(submitted: boolean) {
    this.submitted = submitted;
 }

  save(organization: OrganizationModel) {
    /*Disable button*/
    this.working = true;

    /*Create the object to be send*/
    organization = Object.assign(this.dataService.organizations().build(), organization);

    /*Call to the service*/
    this.dataService.organizations().create(organization).subscribe(
      result => {
        this.alertMessageService.addAlert({
          type: 'success',
          message: 'Organization ' + organization.name + ' was created.'
       });
        let link = ['/organizations'];
        this.router.navigate(link);
     },
      error => {
        this.working = false;
        this.alerts.push({
          type: 'error',
          message: 'Organizations could not be create.',
          details: error
       });
     }
    );
 }

  cancel() {
    let link = ['/organizations'];
    this.router.navigate(link);
 }

}
