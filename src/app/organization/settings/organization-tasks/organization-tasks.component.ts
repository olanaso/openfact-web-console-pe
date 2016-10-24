import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Organization } from '../../../shared';
import { DataService, AlertService } from '../../../shared';

@Component({
  selector: 'app-organization-tasks',
  templateUrl: './organization-tasks.component.html',
  styleUrls: ['./organization-tasks.component.scss']
})
export class OrganizationTasksComponent implements OnInit {

  private organization: Organization;

  private form: FormGroup;
  private working: boolean = false;

  private combo = {
    delay: [
      { name: 'Every Day', value: 1000 * 60 * 60 * 24 },
      { name: 'Every 2 Days', value: 1000 * 60 * 60 * 24 * 2 },
      { name: 'Every Week', value: 1000 * 60 * 60 * 24 * 7 }
    ]
  };

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.activatedRoute.data.subscribe(result => {
      this.organization = <Organization>result['organization'];
    });
    this.buildForm();
    this.loadData();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      tasksEnabled: [false],
      taskFirstDate: [undefined],
      taskFirstTime: [undefined],
      taskDelay: [undefined]
    });
  }

  loadData() {
    this.form.patchValue(this.organization || {});

    let date = new Date(this.organization.taskFirstTime);
    this.form.patchValue({
      taskFirstDate: {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate()
      },
      taskFirstTime: {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      }
    });
    this.form.markAsPristine();
  }

  save(value: any) {
    this.working = true;

    let ublServer = {
      tasksEnabled: value.tasksEnabled,
      taskFirstTime: new Date(value.taskFirstDate.year, value.taskFirstDate.month, value.taskFirstDate.day, value.taskFirstTime.hour, value.taskFirstTime.minute, value.taskFirstTime.second),
      taskDelay: value.taskDelay
    };

    this.organization.save(ublServer).subscribe(
      result => {
        this.working = false;
        this.form.markAsPristine();
        this.alertService.pop('success', 'Success', 'Your changes have been saved to the organization.');
      },
      error => {
        this.working = false;
        this.alertService.pop('error', 'Error', 'Your changes could not saved to the organization.');
      }
    );
  }

}
