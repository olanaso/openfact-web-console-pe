import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'app-events-settings',
  templateUrl: './events-settings.component.html',
  styleUrls: ['./events-settings.component.scss']
})
export class EventsSettingsComponent implements OnInit {

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
    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.serverInfo = this.activatedRoute.snapshot.data['serverinfo'];
    this.eventsConfig = this.activatedRoute.snapshot.data['eventsConfig'];

    this.eventListeners = Object.keys(this.serverInfo.providers.eventsListener.providers);

    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      adminEventsEnabled: [this.eventsConfig.adminEventsEnabled, Validators.compose([Validators.required])],
      adminEventsDetailsEnabled: [this.eventsConfig.adminEventsEnabled, Validators.compose([Validators.required])]
    });
  }

  clearAdminEvents(content) {
    this.modalService.open(content).result.then((result) => {
      this.dataService.organizations().getClearAdminEvents(this.organization).subscribe(
        result => {
          this.alertService.pop('success', 'Success', 'The admin events has been cleared.');
        }, error => {
          this.alertService.pop('error', 'Error', 'Organization could not be deleted.');
        });
    }, (reason) => {
    });
  }

  save(form) {
    this.working = true;

    this.dataService.organizations().updateEventsConfig(this.organization, Object.assign(this.eventsConfig, form)).subscribe(
      result => {
        this.working = false;
        this.alertService.pop('success', 'Success', 'Your changes have been saved to the realm.');
      },
      error => {
        this.working = false;
        this.alertService.pop('error', 'Error', 'Organization could not be created.');
      }
    );
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

}
