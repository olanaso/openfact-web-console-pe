import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'of-organization-settings',
  templateUrl: './organization-settings.component.html',
  styleUrls: ['./organization-settings.component.scss']
})
export class OrganizationSettingsComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;

  private organization: Organization;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.organization = data["organization"];
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

}
