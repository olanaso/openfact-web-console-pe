import { Component, OnInit } from '@angular/core';

import { Organization, DataService, AlertService } from '../../shared';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  private organizations: Array<Organization> = new Array<Organization>();
  private filterOptions: any = {
    filter: {
      filterText: undefined,
      selected: { name: 'Name', shortName: 'Name', value: 'name' },
      options: [
        { name: 'Name', shortName: 'Name', value: 'name' },
        { name: 'Supplier Name', shortName: 'S.Name', value: 'supplierName' },
        { name: 'Registration Name', shortName: 'R.Name', value: 'registrationName' }
      ]
    },
    sorter: {
      ascending: true,
      selected: { name: 'Name', shortName: 'Name', value: 'name' },
      options: [
        { name: 'Name', shortName: 'Name', value: 'name' },
        { name: 'Supplier Name', shortName: 'S.Name', value: 'supplierName' },
        { name: 'Registration Name', shortName: 'R.Name', value: 'registrationName' }
      ]
    }
  };

  constructor(private dataService: DataService, private alertService: AlertService) {
    this.loadOrganizations();
  }

  ngOnInit() {
  }

  loadOrganizations() {
    this.dataService.organizations().getAll().subscribe(
      result => {
        this.organizations = result;
      }, error => {
        this.alertService.pop('error', 'Error', 'Error loading projects.');
      });
  }

  public changeFilter(filter: any) {
    this.filterOptions.filter.selected = filter;
  }

  public changeSorter(sorter: any) {
    this.filterOptions.sorter.selected = sorter;
  }

}
