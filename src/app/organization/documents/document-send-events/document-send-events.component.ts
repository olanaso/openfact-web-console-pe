import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AlertService } from './../../../core/alert/alert.service';
import { DataService } from './../../../core/data/data.service';
import { Document } from './../../../core/model/document.model';
import { Organization } from './../../../core/model/organization.model';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'of-document-send-events',
  templateUrl: './document-send-events.component.html',
  styleUrls: []
})
export class DocumentSendEventsComponent implements OnInit, OnDestroy {

  parentDataSubscription: Subscription;
  dataSubscription: Subscription;

  organization: Organization;
  document: Document;
  sendEvents: Array<any>;

  selectedDestinyType: string = 'CUSTOMER';
  destinyType = [
    { denomination: 'send-to-customer', value: 'CUSTOMER' },
    { denomination: 'send-to-third-party', value: 'THIRD_PARTY' },
    { denomination: 'send-to-custom-third-party-by-email', value: 'THIRD_PARTY_BY_EMAIL' }
  ];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.parentDataSubscription = this.route.parent.parent.data.subscribe(data => {
      this.organization = data['organization'];
    });
    this.dataSubscription = this.route.parent.data.subscribe(data => {
      this.document = data['document'];
      this.loadData(this.selectedDestinyType);
    });
  }

  ngOnDestroy() {
    this.parentDataSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }

  loadData(destinyType: string) {
    const customerQueryParams: URLSearchParams = new URLSearchParams();
    customerQueryParams.set('destinyType', destinyType);
    this.document.getSendEvents(customerQueryParams).subscribe(data => {
      this.sendEvents = data;
    });
  }

  downloadFile(file) {
    this.dataService.files().download(this.organization, file.id, file.fileName);
  }

}