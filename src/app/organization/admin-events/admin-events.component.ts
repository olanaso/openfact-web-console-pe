import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { URLSearchParams } from '@angular/http';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'of-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.scss']
})
export class AdminEventsComponent implements OnInit {

  organization: any;

  pagination: any = {
    page: 1,
    size: 10
  };

  adminEvents: Array<any>;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.loadEvents();
  }

  ngOnInit() {
  }

  loadEvents() {
    let first = (this.pagination.page - 1) * this.pagination.size;
    let max = this.pagination.page * this.pagination.size;

    let queryParams = new URLSearchParams();
    queryParams.set("first", first.toString());
    queryParams.set("max", max.toString());

    this.dataService.organizations().getAdminEvents(this.organization, queryParams).subscribe(
      result => {
        this.adminEvents = result;
      },
      error => {
        this.alertService.pop('error', 'Error', 'Your changes could not saved to the organization.');
      }
    );
  }

}
