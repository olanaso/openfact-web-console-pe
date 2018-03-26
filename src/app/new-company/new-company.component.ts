import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company, CompanyService } from './../ngx-openfact';
import { User, UserService } from './../ngx-login-client';
import { Notification, NotificationType, Notifications } from './../ngx-base';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'of-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss']
})
export class NewCompanyComponent implements OnInit, OnDestroy {

  working = false;
  companyForm: FormGroup;

  public loggedInUser: User;
  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private companyService: CompanyService,
    private notifications: Notifications,
  ) {
    this.subscriptions.push(
      this.userService.loggedInUser.subscribe((val) => this.loggedInUser = val)
    );
  }

  ngOnInit() {
    this.companyForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.maxLength(250)])],
      description: [null, Validators.compose([Validators.maxLength(250)])]
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

  save() {
    if (!this.companyForm.valid || this.working) {
      return;
    }

    this.working = true;

    const company = this.createTransientCompany();
    company.name = this.companyForm.value.name;
    company.description = this.companyForm.value.description;

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

  createTransientCompany(): Company {
    const company = {
      owner: {
        id: this.loggedInUser.id
      }
    } as Company;

    return company;
  }

}
