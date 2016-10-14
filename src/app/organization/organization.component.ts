import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.data['organization']);
  }

  ngOnInit() {
  }

}
