import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AlertService } from './../../../../core/alert/alert.service';
import { DataService } from './../../../../core/data/data.service';
import { Document } from './../../../../core/model/document.model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'of-credit-note-edit-overview',
  templateUrl: './credit-note-edit-overview.component.html',
  styleUrls: []
})
export class CreditNoteEditOverviewComponent implements OnInit, OnDestroy {

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
