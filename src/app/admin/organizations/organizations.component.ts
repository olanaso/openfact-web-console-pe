import { Component, OnInit } from '@angular/core';
import * as Collections from 'typescript-collections';
import { Organization } from '../../services/models/organization';

import { DataService } from '../../services/data/data.service';
import { AlertService } from '../../components/alerts/alert.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  private searchResult: Array<Organization> = new Array<Organization>();

  private filters = {
    filterText: undefined
  };

  constructor(
    private dataService: DataService,
    private alertService: AlertService) {
    this.search();
  }

  ngOnInit() {
  }

  search() {
    this.dataService.organizations().getAll().subscribe(
      result => {
        this.searchResult = result;
      }, error => {
        this.alertService.pop('error', 'Error', 'Error loading projects.');
      });
  }

}
