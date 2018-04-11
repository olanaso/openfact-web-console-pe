import { Component, OnInit, OnDestroy } from '@angular/core';
import { Organization, OrganizationService } from './../ngx-openfact';
import { User, UserService } from './../ngx-login-client';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'of-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit, OnDestroy {

  masterOrganization: Organization;
  ownedOrganizations: Organization[] = [];
  collaboratedOrganizations: Organization[] = [];

  private loggedInUser: User;
  private subscriptions: Subscription[] = [];

  constructor(
    private userService: UserService,
    private organizationService: OrganizationService
  ) {
    this.subscriptions.push(
      userService.loggedInUser.subscribe((val) => {
        this.loggedInUser = val;
        this.search();
      })
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

  search() {
    this.organizationService.searchCompaniesByUserid(this.loggedInUser.id).subscribe((val) => {
      this.masterOrganization = val.master;
      this.ownedOrganizations = val.owned;
      this.collaboratedOrganizations = val.collaborated;
    });
  }

}
