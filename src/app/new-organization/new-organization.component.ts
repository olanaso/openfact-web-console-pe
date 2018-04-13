import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Organization, OrganizationService } from './../ngx-openfact';
import { User, UserService } from './../ngx-login-client';
import { Notification, NotificationType, Notifications } from './../ngx-base';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'of-new-organization',
  templateUrl: './new-organization.component.html',
  styleUrls: ['./new-organization.component.scss']
})
export class NewOrganizationComponent implements OnInit, OnDestroy {

  working = false;
  organizationForm: FormGroup;

  private loggedInUser: User;
  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private companyService: OrganizationService,
    private notifications: Notifications,
  ) {
    this.subscriptions.push(
      this.userService.loggedInUser.subscribe((val) => this.loggedInUser = val)
    );
  }

  ngOnInit() {
    this.organizationForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.maxLength(250)])],
      description: [null, Validators.compose([Validators.maxLength(250)])]
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

  save() {
    if (!this.organizationForm.valid || this.working) {
      return;
    }

    this.working = true;

    const company = this.createTransientCompany();
    company.name = this.organizationForm.value.name;
    company.description = this.organizationForm.value.description;

    this.companyService.create(company).subscribe(
      (result) => {
        this.working = false;
        this.notifications.message({
          message: `Organización creada!`,
          type: NotificationType.SUCCESS
        } as Notification);
        this.router.navigate(['/_home']);
      },
      (error) => {
        this.working = false;
        this.notifications.message({
          message: `Error al crear la Organización!`,
          type: NotificationType.DANGER
        } as Notification);
      }
    );
  }

  createTransientCompany(): Organization {
    const company = {} as Organization;

    return company;
  }

}
