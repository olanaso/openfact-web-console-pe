import { Notification, NotificationType, Notifications } from './../../ngx-base';
import { Contexts } from './../../ngx-openfact/contexts/contexts';
import { Subscription } from 'rxjs/Subscription';
import { Context } from './../../ngx-openfact/contexts/context';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrganizationAdditionalInformation, OrganizationPeruService } from './../../ngx-openfact';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'of-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.scss']
})
export class AdditionalInformationComponent implements OnInit, OnDestroy {

  working = false;
  organizationForm: FormGroup;

  private context: Context;
  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private organizationPeruService: OrganizationPeruService,
    private contexts: Contexts,
    private notifications: Notifications,
  ) {
    this.organizationForm = this.formBuilder.group({
      assignedId: [null, Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
      additionalAssignedId: ['6', Validators.compose([Validators.maxLength(2)])],
      razonSocial: [null, Validators.compose([Validators.maxLength(250)])],
      nombreComercial: [null, Validators.compose([Validators.maxLength(250)])],
      region: [null, Validators.compose([Validators.maxLength(250)])],
      provincia: [null, Validators.compose([Validators.maxLength(250)])],
      distrito: [null, Validators.compose([Validators.maxLength(250)])],
      codigoPostal: [null, Validators.compose([Validators.minLength(6), Validators.maxLength(6)])],
      codigoPais: ['PE', Validators.compose([Validators.minLength(2), Validators.maxLength(2)])],
      direccion: [null, Validators.compose([Validators.maxLength(250)])]
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
    this.organizationPeruService.getInformacionAdicional(this.context.organization.id).subscribe((val) => {
      this.organizationForm.patchValue(val);
    });
  }

  save() {
    if (!this.organizationForm.valid || this.working) {
      return;
    }

    this.working = true;

    let company = this.createTransientCompany();
    company = Object.assign(company, this.organizationForm.value);

    this.organizationPeruService.update(company).subscribe(
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

  createTransientCompany(): OrganizationAdditionalInformation {
    return  {
      id: this.context.organization.id
    } as OrganizationAdditionalInformation;
  }

}
