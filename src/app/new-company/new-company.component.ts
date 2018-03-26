import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from './../ngx-openfact/companies/company.service';
import { Notification, NotificationType, Notifications } from './../ngx-base';

@Component({
  selector: 'of-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss']
})
export class NewCompanyComponent implements OnInit {

  working = false;
  companyForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private notifications: Notifications,
  ) { }

  ngOnInit() {
    this.companyForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.maxLength(250)])],
      description: [null, Validators.compose([Validators.maxLength(250)])]
    });
  }

  save() {
    if (!this.companyForm.valid || this.working) {
      return;
    }

    this.working = true;

    this.companyService.create(this.companyForm.value).subscribe(
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

}
