import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { DebitNote } from '../../core/models/debit-note.model';

@Component({
  selector: 'of-debit-note-overview',
  templateUrl: './debit-note-overview.component.html',
  styleUrls: ['./debit-note-overview.component.scss']
})
export class DebitNoteOverviewComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;

  private debitNote: DebitNote;
  private debitNoteJson: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.debitNote = data["debitNote"];
      this.debitNote.getJsonRepresentation().subscribe(data => {
        this.debitNoteJson = data;
      });
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

}
