import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Contexts, Organization, OrganizationService } from './../../../../ngx-openfact';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/publish';

@Component({
  selector: 'of-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit, OnDestroy {

  company: Organization;

  loading = false;
  active: any = {};
  activeMap: Map<string, any>;
  activeMapKeys;

  keys: any;
  type = 'org.openfact.core.keys.KeyProvider';

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private companyService: OrganizationService,
    private contexts: Contexts
  ) {
    this.subscriptions.push(
      contexts.current
        .map((val) => val.organization)
        .do((company) => {
          this.loading = true;
          this.company = company;
        })
        .switchMap((company) => this.companyService.getKeys(this.company.id))
        .do((keys) => this.keys = keys)
        .switchMap(() => {
          let params: HttpParams = new HttpParams();
          params = params.set('type', this.type);
          params = params.set('parent', this.company.id);
          return this.companyService.getComponents(this.company.id, params);
        })
        .do((components) => {
          for (let i = 0; i < this.keys.keys.length; i++) {
            for (let j = 0; j < components.length; j++) {
              if (this.keys.keys[i].providerId === components[j].id) {
                this.keys.keys[i].provider = components[j];
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

          this.activeMap = new Map<string, any>();
          for (const key in this.active) {
            if (this.active[key]) {
              this.activeMap.set(key, this.active[key]);
            }
          }

          this.activeMapKeys = Array.from(this.activeMap.keys());
        })
        .do(() => {
          this.loading = false;
        })
        .publish().connect()
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

}