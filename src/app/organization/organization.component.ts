import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Organization } from '../shared';

@Component({
  selector: 'organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  private organization: Organization;

  constructor(private activatedRoute: ActivatedRoute) {
    this.organization = this.activatedRoute.snapshot.data['organization'];
  }

  ngOnInit() {
  }

}
