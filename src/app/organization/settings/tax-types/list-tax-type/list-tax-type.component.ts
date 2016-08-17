import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators, CORE_DIRECTIVES} from '@angular/common';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {OrganizationModel, TaxType, DataService} from '../../../../services';
import {Alert, AlertMessageService} from '../../../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-list-tax-types',
  templateUrl: 'list-tax-type.component.html',
  styleUrls: ['list-tax-type.component.css']
})
export class ListTaxTypesComponent implements OnInit {

  organization: OrganizationModel;
  taxTypes: Array<TaxType> = [];
  newTaxType: TaxType = new TaxType();

  form: FormGroup;
  working: boolean = false;
  submitted: boolean = false;

  alerts: Array<Alert> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertMessageService: AlertMessageService) {
    this.organization = this.activatedRoute.parent.parent.snapshot.data['organization'];
  }

  ngOnInit() {
    this.loadAlerts();
    this.buildForm();
    this.loadData();
  }

  loadAlerts() {
    this.alertMessageService.getAlerts().forEach(alert => {
      this.alerts.push(alert);
    });
    this.alertMessageService.clearAlerts();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: [''],
      code: [''],
      value: ['']
    });
  }

  loadData() {
    /*let tasksSchedule = <TasksSchedule>(this.organization.tasksSchedule || {});
    (<FormControl>this.form.controls['attempNumber']).setValue(tasksSchedule.attempNumber);
    (<FormControl>this.form.controls['lapseTime']).setValue(new TimeUnit(tasksSchedule.lapseTime));
    (<FormControl>this.form.controls['onErrorAttempNumber']).setValue(tasksSchedule.onErrorAttempNumber);
    (<FormControl>this.form.controls['onErrorLapseTime']).setValue(new TimeUnit(tasksSchedule.onErrorLapseTime));
    (<FormControl>this.form.controls['delayTime']).setValue(new TimeUnit(tasksSchedule.delayTime));
    (<FormControl>this.form.controls['submitTime']).setValue(tasksSchedule.submitTime);
    (<FormControl>this.form.controls['submitDays']).setValue(tasksSchedule.submitDays);*/
  }

  setSubmitted(submitted: boolean) {
    this.submitted = submitted;
  }

  addTaxType() {
    this.taxTypes.push(this.newTaxType);
    this.newTaxType = new TaxType();
  }

  removeTaxType(index: number) {
    this.taxTypes.splice(index, 1);
  }

  save() {
    this.working = true;

    let value = <FormControl>this.form.value;


    this.organization.save().subscribe(
      result => {
        this.alerts.push({
          type: 'success',
          message: 'Success',
          details: 'Your changes have been saved to the organization.'
        });
        this.working = false;
      },
      error => {
        this.working = false;
        this.alerts.push({
          type: 'error',
          message: 'Error',
          details: 'Your changes could not saved to the organization.'
        });
      }
    );
  }

  reset() {
    this.loadData();
  }

}
