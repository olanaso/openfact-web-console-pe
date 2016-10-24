import { Component, OnInit, Input } from '@angular/core';

import { Organization } from '../../models';

@Component({
  selector: 'organization-header',
  templateUrl: './organization-header.component.html',
  styleUrls: ['./organization-header.component.scss']
})
export class OrganizationHeaderComponent implements OnInit {

  @Input()
  private currentOrganization: Organization;

  @Input()
  private organizations: Array<Organization>;

  constructor() { }

  ngOnInit() {
  }

}
