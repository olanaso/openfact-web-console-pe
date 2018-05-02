import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Notification, NotificationType, Notifications } from './../../ngx-base';
import { Context, OrganizationPeruService, Contexts, OrganizationSunatInformation } from './../../ngx-openfact';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'of-sunat-information',
  templateUrl: './sunat-information.component.html',
  styleUrls: ['./sunat-information.component.scss']
})
export class SunatInformationComponent implements OnInit, OnDestroy {

  working = false;
  sunatForm: FormGroup;

  private context: Context;
  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private organizationPeruService: OrganizationPeruService,
    private contexts: Contexts,
    private notifications: Notifications,
  ) {
    this.sunatForm = this.formBuilder.group({
      useCustomConfig: [null, Validators.compose([Validators.required])],
      usuario: [null, Validators.compose([Validators.maxLength(250)])],
      password: [null, Validators.compose([Validators.maxLength(250)])],
      boletaFacturaEndpoint: [null, Validators.compose([Validators.maxLength(250)])],
      guiaRemisionEndpoint: [null, Validators.compose([Validators.maxLength(250)])],
      retencionPercepcionEndpoint: [null, Validators.compose([Validators.maxLength(250)])],
      consultaFacturaEndpoint: [null, Validators.compose([Validators.maxLength(250)])],
      consultaCdrEndpoint: [null, Validators.compose([Validators.maxLength(250)])],
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
    this.organizationPeruService.getInformacionSUNAT(this.context.organization.id).subscribe((val) => {
      this.sunatForm.patchValue(val);
    });
  }

  save() {
    if (!this.sunatForm.valid || this.working) {
      return;
    }

    this.working = true;

    let company = this.createTransientCompany();
    company = Object.assign(company, this.sunatForm.value);

    this.organizationPeruService.updateInformacionSunat(company).subscribe(
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

  createTransientCompany(): OrganizationSunatInformation {
    return {
      id: this.context.organization.id
    } as OrganizationSunatInformation;
  }

}
