import { Component, OnInit } from '@angular/core';
import { DefaultHeaderComponent } from '../../../directives/default-header';
import { OrganizationService } from '../../../services/organization.service';
import { OrganizationModel } from '../../../models/organization-model';

@Component({
  moduleId: module.id,
  selector: 'app-create-organization',
  templateUrl: 'create-organization.component.html',
  styleUrls: ['create-organization.component.css'],
  directives: [DefaultHeaderComponent],
  providers: [OrganizationService]
})
export class CreateOrganizationComponent implements OnInit {

  constructor(private organizationService: OrganizationService) { }

  ngOnInit() {
    this.save();
  }

  save() {
    let organization: OrganizationModel = this.organizationService.build();
    organization.name = 'ahren';
    organization.supplierName = 'ahren S.A.C.';
    
    this.organizationService.create(organization)
          .subscribe(
            result => console.log(result),
            error => console.log('error'));
  }

}
