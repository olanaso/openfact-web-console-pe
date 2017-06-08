import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';
import { Organization } from '../../../../../core/model/organization.model';
import { Document } from '../../../../../core/model/document.model';

@Component({
  selector: 'of-perception-edit',
  templateUrl: './perception-edit.component.html',
  styles: []
})
export class PerceptionEditComponent implements OnInit, OnDestroy {

  parentDataSubscription: Subscription;
  dataSubscription: Subscription;

  organization: Organization;
  document: Document;
  documentJson: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.parentDataSubscription = this.activatedRoute.parent.parent.parent.data.subscribe(data => {
      this.organization = data['organization'];
    });
    this.dataSubscription = this.activatedRoute.data.subscribe(data1 => {
      this.document = data1['document'];
      this.document.getJsonRepresentation().subscribe(data2 => {
        this.documentJson = data2;
      });
    });
  }

  ngOnDestroy() {
    this.parentDataSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }

}
