import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'app-organization-tasks',
  templateUrl: './organization-tasks.component.html',
  styleUrls: ['./organization-tasks.component.scss']
})
export class OrganizationTasksComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;

  private organization: Organization;

  private form: FormGroup;
  private working: boolean = false;

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
      this.loadData();
    });
    
    this.buildForm();  
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      tasksEnabled: [false, Validators.compose([Validators.required])],
      taskDelay: [undefined, Validators.compose([Validators.maxLength(150)])],
      taskFirstDate: [undefined, Validators.compose([Validators.maxLength(150)])],
      taskFirstTime: [undefined, Validators.compose([Validators.maxLength(150)])]
    });

    let formControl = this.form.get("tasksEnabled") as FormControl;
    formControl.valueChanges.subscribe(taskEnabled => {
      if (taskEnabled == true) {
        this.form.addControl("taskDelay", this.formBuilder.control(undefined, Validators.compose([Validators.required])));
        this.form.addControl("taskFirstDate", this.formBuilder.control(undefined, Validators.compose([Validators.required])));
        this.form.addControl("taskFirstTime", this.formBuilder.control(undefined, Validators.compose([Validators.required])));

        let organizationTaskFirstTime = new Date(this.organization.taskFirstTime);

        this.form.patchValue({
          taskDelay: this.organization.taskDelay,
          taskFirstDate: {
            year: organizationTaskFirstTime.getFullYear(),
            month: organizationTaskFirstTime.getMonth() + 1,
            day: organizationTaskFirstTime.getDate()
          },
          taskFirstTime: {
            hour: organizationTaskFirstTime.getHours(),
            minute: organizationTaskFirstTime.getMinutes(),
            second: organizationTaskFirstTime.getSeconds()
          }
        });

      } else {
        this.form.removeControl("taskDelay");
        this.form.removeControl("taskFirstDate");
        this.form.removeControl("taskFirstTime");
      }
    });

    this.form.patchValue({
      tasksEnabled: this.organization.tasksEnabled
    });
  }

  loadData() {
    this.form.patchValue(this.organization);
    this.form.markAsPristine();
  }

  save(form: any) {
    this.working = true;

    let taskConfig = {
      tasksEnabled: form.tasksEnabled,
      taskDelay: form.taskDelay,
      taskFirstTime: undefined
    };

    if (form.tasksEnabled) {
      let taskDatetime = new Date();
      taskDatetime.setFullYear(form.taskFirstDate.year);
      taskDatetime.setMonth(form.taskFirstDate.month - 1);
      taskDatetime.setDate(form.taskFirstDate.day);

      taskDatetime.setHours(form.taskFirstTime.hour);
      taskDatetime.setMinutes(form.taskFirstTime.minute);
      taskDatetime.setSeconds(0);

      taskConfig.taskFirstTime = taskDatetime;
    }

    this.organization.save(taskConfig).subscribe(
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
