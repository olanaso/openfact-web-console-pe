import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';
import { Organization } from '../../../core/model/organization.model';
import { DataService } from '../../../core/data/data.service';

@Component({
  selector: 'of-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;
  private organization: Organization;

  private providers = { remainingTime: -1, tasks: [] };
  private jobReports: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.organization = data['organization'];
      this.refreshData();
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  refreshData() {
    this.organization.getTaskProviders().subscribe(data1 => {
      this.providers = data1;
    });

    const queryParams: URLSearchParams = new URLSearchParams();
    queryParams.set('first', '0');
    queryParams.set('max', '5');
    this.organization.getAllTasks(queryParams).subscribe(data2 => {
      this.jobReports = data2;
    });
  }

  parseMillisecondsIntoReadableTime(milliseconds): string {
    if (milliseconds < 0) {
      return '00:00:00';
    }

    //Get hours from milliseconds
    let hours = milliseconds / (1000 * 60 * 60);
    let absoluteHours = Math.floor(hours);
    let h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

    //Get remainder from hours and convert to minutes
    let minutes = (hours - absoluteHours) * 60;
    let absoluteMinutes = Math.floor(minutes);
    let m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

    //Get remainder from minutes and convert to seconds
    let seconds = (minutes - absoluteMinutes) * 60;
    let absoluteSeconds = Math.floor(seconds);
    let s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

    return h + ':' + m + ':' + s;
  }

}
