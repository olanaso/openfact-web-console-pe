import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Organization } from '../../../../core/model/organization.model';
import { DataService } from '../../../../core/data/data.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'of-organization-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class OrganizationsListComponent implements OnInit {

  loading = false;
  searchResult: Array<Organization> = new Array<Organization>();

  filters: any = {
    filterText: undefined
  };

  constructor(private router: Router,
              private toastr: ToastsManager,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.loading = true;
    this.dataService.organizations().getAll().subscribe(
      (data) => {
        this.searchResult = data;
        this.loading = false;
      }, () => {
        this.loading = false;
      }
    );
  }

  editOrganization(organization: Organization): void {
    this.router.navigate(['/organizations', organization.organization]);
  }

  delete(organization: Organization) {
    organization.restangular.delete().subscribe(
      (data) => {
        this.toastr.success('Success! The organization has been deleted.');
        this.search();
      }
    );
  }

}
