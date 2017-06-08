import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';
import { Organization } from '../../../../core/model/organization.model';
import { DataService } from '../../../../core/data/data.service';

@Component({
  selector: 'of-settings-all-keys',
  templateUrl: './settings-all-keys.component.html',
  styles: [``]
})
export class SettingsAllKeysComponent implements OnInit, OnDestroy {

  dataSubscription: Subscription;

  type = 'org.openfact.keys.KeyProvider';
  keys: any;

  active: any = {};
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

  viewKey(key: any) {
    key.open();
  }

  loadComponents() {
    const queryParams = new URLSearchParams();
    queryParams.set('type', this.type);
    queryParams.set('parent', this.organization.id);

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
      }
    );
  }

}
