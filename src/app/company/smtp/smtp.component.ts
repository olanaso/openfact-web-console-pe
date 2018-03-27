import { Company } from './../../ngx-openfact/models/company';
import { Contexts } from './../../ngx-openfact/contexts/contexts';
import { CompanyService } from './../../ngx-openfact/companies/company.service';
import { Subscription } from 'rxjs/Subscription';
import { Context } from './../../ngx-openfact/contexts/context';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Notification, NotificationType, Notifications } from './../../ngx-base';

@Component({
  selector: 'of-smtp',
  templateUrl: './smtp.component.html',
  styleUrls: ['./smtp.component.scss']
})
export class SmtpComponent implements OnInit {

  working = false;
  companyForm: FormGroup;

  private context: Context;
  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private contexts: Contexts,
    private notifications: Notifications,
  ) {
    this.companyForm = this.formBuilder.group({
      host: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
      port: [undefined, Validators.compose([Validators.maxLength(20)])],
      from: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
      ssl: [false, Validators.compose([Validators.required])],
      starttls: [false, Validators.compose([Validators.required])],
      auth: [false],
      user: [undefined, Validators.compose([Validators.maxLength(150)])],
      password: [undefined, Validators.compose([Validators.maxLength(150)])]
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
    this.companyService.getCompanyById(this.context.company.id).subscribe((val) => {
      this.companyForm.patchValue(val.smtpServer);
    });
  }

  save() {
    if (!this.companyForm.valid || this.working) {
      return;
    }

    this.working = true;

    const company = this.createTransientCompany();
    company.smtpServer = Object.assign({}, this.companyForm.value);

    this.companyService.update(company).subscribe(
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

  createTransientCompany(): Company {
    const company = {
      id: this.context.company.id,
      owner: {
        id: this.context.company.owner.id
      }
    } as Company;

    return company;
  }

}
