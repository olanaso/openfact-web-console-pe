import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Validators, CORE_DIRECTIVES} from '@angular/common';
import {FormGroup, FormBuilder} from '@angular/forms';

import 'rxjs/Rx';

import {OrganizationModel, DataService} from '../../services';
import {Alert, AlertMessageService} from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'organization-create',
  templateUrl: 'create-organization.component.html',
  styleUrls: ['create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {

  organization: OrganizationModel;

  form: FormGroup;
  working: boolean = false;
  submitted: boolean = false;

  alerts: Array<Alert> = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertMessageService: AlertMessageService) {
    this.organization = this.dataService.organizations().build();
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
    Object.assign(this.organization, organization);

    /*Call to the service*/
    this.dataService.organizations().create(this.organization).subscribe(
      result => {
        this.alertMessageService.addAlert({
          type: 'success',
          message: 'Success',
          details: 'Success! The organization has been created.'
        });        

        let link = ['/organization', organization.name];
        this.router.navigate(link);
      },
      error => {
        this.working = false;
        this.alerts.push({
          type: 'error',
          message: 'Error',
          details: 'Organization could not be created.'
        });
      }
    );
  }

  cancel() {
    let link = ['/organizations'];
    this.router.navigate(link);
  }

}
