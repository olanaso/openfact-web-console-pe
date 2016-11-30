import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import * as Collections from 'typescript-collections';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'of-organization-key-active-settings',
  templateUrl: './organization-key-active-settings.component.html',
  styleUrls: ['./organization-key-active-settings.component.scss']
})
export class OrganizationKeyActiveSettingsComponent implements OnInit {

  type: string = 'org.openfact.keys.KeyProvider';
  keys: any;

  active: any = {};
  activeMap = new Collections.Dictionary<String, any>();

  organization: Organization;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private alertService: AlertService) {
    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.keys = this.activatedRoute.snapshot.data['keys'];
    this.loadComponents();
  }

  ngOnInit() {
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

        this.activeMap = new Collections.Dictionary<String, any>()
        for (var key in this.active) {
          this.activeMap.setValue(key, this.active[key]);
        }
        
      },
      error => {
        this.alertService.pop('error', 'Error', 'Your changes could not saved to the organization.');
      }
    );
  }

}
