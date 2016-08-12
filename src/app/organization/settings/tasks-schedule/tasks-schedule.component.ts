import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators, CORE_DIRECTIVES} from '@angular/common';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {OrganizationModel, PostalAddress, TasksSchedule, TimeUnit, DataService} from '../../../services';
import {Alert, AlertMessageService} from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'address',
  templateUrl: 'tasks-schedule.component.html',
  styleUrls: ['tasks-schedule.component.css']
})
export class TasksScheduleComponent implements OnInit {

  organization: OrganizationModel;
  additionalAccountIds: string[] = ['DNI', 'RUC'];

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
    this.organization = this.activatedRoute.parent.snapshot.data['organization'];
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
      attempNumber: [''],
      lapseTime: this.formBuilder.group({
        time: [''],
        unit: ['']
      }),
      onErrorAttempNumber: [''],
      onErrorLapseTime: this.formBuilder.group({
        time: [''],
        unit: ['']
      }),
      delayTime: this.formBuilder.group({
        time: [''],
        unit: ['']
      }),
      submitTime: [''],
      submitDays: ['']
    });
  }

  loadData() {
    let tasksSchedule = <TasksSchedule>(this.organization.tasksSchedule || {});
    (<FormControl>this.form.controls['attempNumber']).setValue(tasksSchedule.attempNumber);
    (<FormControl>this.form.controls['lapseTime']).setValue(new TimeUnit(tasksSchedule.lapseTime));
    (<FormControl>this.form.controls['onErrorAttempNumber']).setValue(tasksSchedule.onErrorAttempNumber);
    (<FormControl>this.form.controls['onErrorLapseTime']).setValue(new TimeUnit(tasksSchedule.onErrorLapseTime));
    (<FormControl>this.form.controls['delayTime']).setValue(new TimeUnit(tasksSchedule.delayTime));
    (<FormControl>this.form.controls['submitTime']).setValue(tasksSchedule.submitTime);
    (<FormControl>this.form.controls['submitDays']).setValue(tasksSchedule.submitDays);
  }

  setSubmitted(submitted: boolean) {
    this.submitted = submitted;
  }

  save() {
    this.working = true;

    let value = <FormControl>this.form.value;
    this.organization.tasksSchedule.attempNumber = value['attempNumber'];
    this.organization.tasksSchedule.lapseTime = TimeUnit.toSeconds(value['lapseTime']['time'], value['lapseTime']['unit']);
    this.organization.tasksSchedule.onErrorAttempNumber = value['onErrorAttempNumber'];
    this.organization.tasksSchedule.onErrorLapseTime = TimeUnit.toSeconds(value['onErrorLapseTime']['time'], value['onErrorLapseTime']['unit']);
    this.organization.tasksSchedule.delayTime = TimeUnit.toSeconds(value['delayTime']['time'], value['delayTime']['unit']);
    this.organization.tasksSchedule.submitTime = value['submitTime'];
    this.organization.tasksSchedule.submitDays = value['submitDays'];

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
