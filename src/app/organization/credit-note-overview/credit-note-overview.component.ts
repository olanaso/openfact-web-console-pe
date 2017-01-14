import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { CreditNote } from '../../core/models/credit-note.model';

@Component({
  selector: 'of-credit-note-overview',
  templateUrl: './credit-note-overview.component.html',
  styleUrls: ['./credit-note-overview.component.scss']
})
export class CreditNoteOverviewComponent implements OnInit {

  private dataSubscription: Subscription;

  private creditNote: CreditNote;
  private creditNoteJson: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.creditNote = data["creditNote"];
      this.creditNote.getJsonRepresentation().subscribe(data => {
        this.creditNoteJson = data;
      });
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

}
