import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CreditNote } from '../../core/models/credit-note.model';

@Component({
  selector: 'of-edit-credit-note',
  templateUrl: './edit-credit-note.component.html',
  styleUrls: ['./edit-credit-note.component.scss']
})
export class EditCreditNoteComponent implements OnInit {

  private creditNote: CreditNote;

  constructor(private activatedRoute: ActivatedRoute) {
    this.creditNote = this.activatedRoute.snapshot.data['creditNote'];
  }

  ngOnInit() {
  }

  downloadXml() {
    this.creditNote.downloadXml();
  }

}
