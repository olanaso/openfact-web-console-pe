import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'app-events-settings',
  templateUrl: './events-settings.component.html',
  styleUrls: ['./events-settings.component.scss']
})
export class EventsSettingsComponent implements OnInit, OnDestroy {

  dataSubscription: Subscription;

  form: FormGroup;
  working: boolean = false;

  organization: any;
  serverInfo: any;
  eventsConfig: any;

  eventListeners: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService,
    private modalService: NgbModal) {
  }

  ngOnInit() {
    this.buildForm();
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.organization = data["organization"];
      this.serverInfo = data["serverinfo"];
      this.eventsConfig = data["eventsConfig"];
      this.eventListeners = Object.keys(this.serverInfo.providers.eventsListener.providers);

      this.loadData();
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      adminEventsEnabled: [null, Validators.compose([Validators.required])],
      adminEventsDetailsEnabled: [null, Validators.compose([Validators.required])]
    });
  }

  loadData() {
    this.form.patchValue({
      adminEventsEnabled: this.eventsConfig.adminEventsEnabled,
      adminEventsDetailsEnabled: this.eventsConfig.adminEventsEnabled
    });
  }

  clearAdminEvents(content) {
    this.modalService.open(content).result.then((result) => {
      this.dataService.organizations().getClearAdminEvents(this.organization).subscribe(result => {
        this.alertService.pop('success', 'Success', 'The admin events has been cleared.');
      });
    }, (reason) => {
    });
  }

  save(form) {
    this.working = true;

    this.dataService.organizations().updateEventsConfig(this.organization, Object.assign(this.eventsConfig, form)).subscribe(
      result => {
        this.working = false;
        this.alertService.pop('success', 'Success', 'Your changes have been saved to the organization.');
      },
      error => {
        this.working = false;
      }
    );
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

}
