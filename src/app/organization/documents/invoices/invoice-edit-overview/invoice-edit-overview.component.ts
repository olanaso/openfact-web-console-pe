import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { AlertService } from './../../../../core/alert/alert.service';
import { DataService } from './../../../../core/data/data.service';
import { Document } from './../../../../core/model/document.model';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'of-invoice-edit-overview',
  templateUrl: './invoice-edit-overview.component.html',
  styleUrls: []
})
export class InvoiceEditOverviewComponent implements OnInit, OnDestroy {

  dataSubscription: Subscription;

  document: Document;
  documentJson: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.parent.data.subscribe(data => {
      this.document = data['document'];
      this.document.getJsonRepresentation().subscribe(data => {
        this.documentJson = data;
      });
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

}
