import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import * as Collections from 'typescript-collections';

import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'of-organization-all-keys-settings',
  templateUrl: './organization-all-keys-settings.component.html',
  styleUrls: ['./organization-all-keys-settings.component.scss']
})
export class OrganizationAllKeysSettingsComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;

  private type: string = 'org.openfact.keys.KeyProvider';
  private keys: any;

  private active: any = {};
  private organization: Organization;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.organization = data["organization"];
      this.keys = data["keys"];

      this.loadComponents();
    });    
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  viewKey(key: any) {
    key.open();
  }

  loadComponents() {
    let queryParams = new URLSearchParams();
    queryParams.set("type", this.type);
    queryParams.set("parent", this.organization.id);

    this.dataService.organizations().getComponents(this.organization, queryParams).subscribe(
      data => {
        for (var i = 0; i < this.keys.keys.length; i++) {
          for (var j = 0; j < data.length; j++) {
            if (this.keys.keys[i].providerId == data[j].id) {
              this.keys.keys[i].provider = data[j];
            }
          }
        }

        for (var t in this.keys.active) {
          for (var i = 0; i < this.keys.keys.length; i++) {
            if (this.keys.active[t] == this.keys.keys[i].kid) {
              this.active[t] = this.keys.keys[i];
            }
          }
        }
      }
    );
  }

}
