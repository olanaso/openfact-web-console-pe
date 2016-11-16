import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'of-organization-settings',
  templateUrl: './organization-settings.component.html',
  styleUrls: ['./organization-settings.component.scss']
})
export class OrganizationSettingsComponent implements OnInit {

  private organization: Organization;

  constructor(private activatedRoute: ActivatedRoute) {
    this.organization = this.activatedRoute.snapshot.parent.data['organization'];
  }

  ngOnInit() {
  }

}
