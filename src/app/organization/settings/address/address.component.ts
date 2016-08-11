import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {OrganizationModel, DataService} from '../../../services';

@Component({
  moduleId: module.id,
  selector: 'app-address',
  templateUrl: 'address.component.html',
  styleUrls: ['address.component.css']
})
export class AddressComponent implements OnInit {

  organization: OrganizationModel;

  constructor(   
    private activatedRoute: ActivatedRoute) {
    this.organization = this.activatedRoute.parent.snapshot.data['organization'];
  }

  ngOnInit() {
  }

}
