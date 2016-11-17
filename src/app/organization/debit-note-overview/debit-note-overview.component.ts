import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { DebitNote } from '../../core/models/debit-note.model';

@Component({
  selector: 'of-debit-note-overview',
  templateUrl: './debit-note-overview.component.html',
  styleUrls: ['./debit-note-overview.component.scss']
})
export class DebitNoteOverviewComponent implements OnInit {

  private debitNote: DebitNote;

  constructor(private activatedRoute: ActivatedRoute,
    private dataService: DataService, private alertService: AlertService) {
    this.debitNote = this.activatedRoute.parent.snapshot.data['debitNote'];
  }

  ngOnInit() {
  }

}
