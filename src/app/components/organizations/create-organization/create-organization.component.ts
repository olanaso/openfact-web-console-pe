import { Component, OnInit } from '@angular/core';
import { DefaultHeaderComponent } from '../../../directives/default-header';

@Component({
  moduleId: module.id,
  selector: 'app-create-organization',
  templateUrl: 'create-organization.component.html',
  styleUrls: ['create-organization.component.css'],
  directives: [DefaultHeaderComponent]
})
export class CreateOrganizationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
