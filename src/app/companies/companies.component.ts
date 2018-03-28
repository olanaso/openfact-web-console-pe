import { Component, OnInit, OnDestroy } from '@angular/core';
import { Company, CompanyService } from './../ngx-openfact';
import { User, UserService } from './../ngx-login-client';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'of-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit, OnDestroy {

  ownedCompanies: Company[] = [];
  collaboratedCompanies: Company[] = [];

  private loggedInUser: User;
  private subscriptions: Subscription[] = [];

  constructor(
    private userService: UserService,
    private companyService: CompanyService
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
    this.companyService.getCompaniesByUserId(this.loggedInUser.id, 'owner').subscribe((val) => {
      this.ownedCompanies = val;
    });
    this.companyService.getCompaniesByUserId(this.loggedInUser.id, 'collaborator').subscribe((val) => {
      this.collaboratedCompanies = val;
    });
  }

}
