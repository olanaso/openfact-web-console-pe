import { Component, OnInit } from '@angular/core';
import { DefaultHeaderComponent } from '../../util/default-header';
import { ButtonSaveComponent } from '../../util/button-save';
import { ButtonCancelComponent } from '../../util/button-cancel';
import { OrganizationModel } from '../../../services/models/organization-model';
import { DataService } from '../../../services/data.service';
import { AlertMessageService } from '../../../services/alert-message.service';

@Component({
  moduleId: module.id,
  selector: 'app-create-organization',
  templateUrl: 'create-organization.component.html',
  styleUrls: ['create-organization.component.css'],
  directives: [DefaultHeaderComponent, ButtonSaveComponent, ButtonCancelComponent],
  providers: [DataService, AlertMessageService]
})
export class CreateOrganizationComponent implements OnInit {

  working: boolean;
  organization: OrganizationModel;

  constructor(private dataService: DataService, private alertMessageService: AlertMessageService) {
    this.working = false;
    this.organization = this.dataService.organizations().build();
  }

  ngOnInit() {}

  save() {
    /*Disable button*/
    this.working = true;

    this.dataService.organizations().create(this.organization)
    .subscribe(result => {
      this.working = false;
      this.alertMessageService.addAlert({
        name: this.organization.name,
        data: {
          type: 'success',
          message: this.organization.name + ' was created.'
        }
      });
    }, error => {
      this.working = false;
      this.alertMessageService.addAlert({
        name: this.organization.name,
        data: {
          type: 'error',
          message: this.organization.name + ' could not be created.'
        }
      });
    });
  }

}
