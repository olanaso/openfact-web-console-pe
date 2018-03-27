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

  filterText: string;
  ownedCompanies: Company[] = [];
  collaboratedCompanies: Company[] = [];

  private offset = 0;
  private limit = 10;

  private loggedInUser: User;
  private subscriptions: Subscription[] = [];

  constructor(
    private userService: UserService,
    private companyService: CompanyService
  ) {
    this.subscriptions.push(
      this.userService.loggedInUser.subscribe((val) => {
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
    this.companyService.getCompanies(this.loggedInUser.id, 'owner').subscribe((val) => {
      this.ownedCompanies = val;
    });
    this.companyService.getCompanies(this.loggedInUser.id, 'collaborator').subscribe((val) => {
      this.collaboratedCompanies = val;
    });
  }

  nextPage() {
    this.offset = this.offset + this.limit;
  }

  previousPage() {
    this.offset = this.offset - this.limit;
  }

  get page() {
    return (this.offset + this.limit) / this.limit;
  }

}
