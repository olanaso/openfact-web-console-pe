import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';
import { Organization } from '../../../../core/model/organization.model';
import { DataService } from '../../../../core/data/data.service';

@Component({
  selector: 'of-admin-events',
  templateUrl: './admin-events.component.html',
  styles: []
})
export class AdminEventsComponent implements OnInit, OnDestroy {

  parentDataSubscription: Subscription;

  organization: Organization;
  adminEvents: Array<any>;

  pagination: any = {
    page: 1,
    size: 10
  };

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.parentDataSubscription = this.route.parent.data.subscribe(data => {
      this.organization = data['organization'];
      this.loadEvents();
    });
  }

  ngOnDestroy() {
    this.parentDataSubscription.unsubscribe();
  }

  loadEvents() {
    const first = (this.pagination.page - 1) * this.pagination.size;
    const max = this.pagination.page * this.pagination.size;

    const queryParams = new URLSearchParams();
    queryParams.set('first', first.toString());
    queryParams.set('max', max.toString());

    this.organization.getAdminEvents(queryParams).subscribe(response => {
      this.adminEvents = response;
    });
  }

}
