import * as Collections from 'typescript-collections';

import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';
import { Organization } from '../../../../core/model/organization.model';
import { DataService } from '../../../../core/data/data.service';

@Component({
  selector: 'of-settings-active-key',
  templateUrl: './settings-active-key.component.html',
  styles: [``]
})
export class SettingsActiveKeyComponent implements OnInit, OnDestroy {

  loading = false;

  dataSubscription: Subscription;

  type = 'org.openfact.keys.KeyProvider';
  keys: any;

  active: any = {};
  activeMap = new Collections.Dictionary<String, any>();

  organization: Organization;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.organization = data['organization'];
      this.keys = data['keys'];
      this.loadComponents();
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  loadComponents() {
    const queryParams = new URLSearchParams();
    queryParams.set('type', this.type);
    queryParams.set('parent', this.organization.id);

    this.loading = true;

    this.organization.getComponents(queryParams).subscribe(
      data => {
        for (let i = 0; i < this.keys.keys.length; i++) {
          for (let j = 0; j < data.length; j++) {
            if (this.keys.keys[i].providerId === data[j].id) {
              this.keys.keys[i].provider = data[j];
            }
          }
        }

        for (const t in this.keys.active) {
          if (this.keys.active[t]) {
            for (let i = 0; i < this.keys.keys.length; i++) {
              if (this.keys.active[t] === this.keys.keys[i].kid) {
                this.active[t] = this.keys.keys[i];
              }
            }
          }
        }

        this.activeMap = new Collections.Dictionary<String, any>();
        for (const key in this.active) {
          if (this.active[key]) {
            this.activeMap.setValue(key, this.active[key]);
          }
        }
      }
    );

    this.loading = false;
  }

}
