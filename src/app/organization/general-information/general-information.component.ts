import { Organization } from './../../ngx-openfact';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrganizationService, Contexts, Context } from './../../ngx-openfact';
import { Notification, NotificationType, Notifications } from './../../ngx-base';

@Component({
  selector: 'of-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent implements OnInit, OnDestroy {

  working = false;
  organizationForm: FormGroup;

  private context: Context;
  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private organizationService: OrganizationService,
    private contexts: Contexts,
    private notifications: Notifications,
  ) {
    this.organizationForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.maxLength(250)])],
      description: [null, Validators.compose([Validators.maxLength(250)])]
    });

    this.subscriptions.push(
      contexts.current.subscribe((val) => {
        this.context = val;
        this.syncForm();
      })
    );
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

  syncForm() {
    this.organizationService.getOrganization(this.context.organization.id).subscribe((val) => {
      this.organizationForm.patchValue(val);
    });
  }

  save() {
    if (!this.organizationForm.valid || this.working) {
      return;
    }

    this.working = true;

    const organization = this.createTransientCompany();
    organization.name = this.organizationForm.value.name;
    organization.description = this.organizationForm.value.description;

    this.organizationService.update(organization).subscribe(
      (result) => {
        this.working = false;
        this.notifications.message({
          message: `Organización actualizada!`,
          type: NotificationType.SUCCESS
        } as Notification);
      },
      (error) => {
        this.working = false;
        this.notifications.message({
          message: `Error al actualizar la Organización!`,
          type: NotificationType.DANGER
        } as Notification);
      }
    );
  }

  createTransientCompany(): Organization {
    const company = {
      id: this.context.organization.id
    } as Organization;

    return company;
  }

}
