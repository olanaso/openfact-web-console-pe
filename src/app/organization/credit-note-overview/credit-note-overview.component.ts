import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  private creditNote: CreditNote;

  constructor(private activatedRoute: ActivatedRoute,
    private dataService: DataService, private alertService: AlertService) {
    this.creditNote = this.activatedRoute.parent.snapshot.data['creditNote'];
  }

  ngOnInit() {
  }

}
