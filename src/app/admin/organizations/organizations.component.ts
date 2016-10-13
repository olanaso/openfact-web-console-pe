import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Organization, DataService, AlertService } from '../../shared';
import { SearchCriteria, SearchCriteriaFilter, SearchCriteriaFilterOperator, SearchResults, Paging, OrderBy } from '../../shared';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  private form: FormGroup;
  private organizations: SearchResults<Organization> = new SearchResults<Organization>();
  private combo: any = {
    orderBy: [
      { name: 'Name', shortName: 'Name', value: 'name' },
      { name: 'Supplier Name', shortName: 'S.Name', value: 'supplierName' },
      { name: 'Registration Name', shortName: 'R.Name', value: 'registrationName' }
    ],
    selected: {
      orderBy: { name: 'Name', shortName: 'Name', value: 'name' }
    }
  };

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.buildForm();
    this.search();
  }

  ngOnInit() {
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      filterText: [null, Validators.compose([Validators.maxLength(150)])],
      orderBy: ['name', Validators.required],
      ascending: [true, Validators.required],
      paging: this.formBuilder.group({
        page: [1, Validators.required],
        size: [8, Validators.required]
      })
    });
  }

  changeOrderBy(orderBy: any): void {
    this.combo.selected.orderBy = orderBy;
    this.form.patchValue({ orderBy: orderBy.value });
    this.search();
  }

  changePagination(page: number): void {
    this.form.patchValue({
      paging: {
        page: page
      }
    });
    this.search();
  }

  search() {
    let criteria = new SearchCriteria();
    criteria.filterText = this.form.value.filterText;
    criteria.orders = [
      new OrderBy(this.form.value.orderBy, this.form.value.ascending)
    ];
    criteria.paging = new Paging(this.form.value.paging.page, this.form.value.paging.size);

    this.dataService.organizations().search(criteria).subscribe(
      result => {
        this.organizations = result;
      }, error => {
        this.alertService.pop('error', 'Error', 'Error loading projects.');
      });
  }

}
