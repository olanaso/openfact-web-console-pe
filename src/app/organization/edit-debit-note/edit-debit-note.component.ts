import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DebitNote } from '../../core/models/debit-note.model';

@Component({
  selector: 'of-edit-debit-note',
  templateUrl: './edit-debit-note.component.html',
  styleUrls: ['./edit-debit-note.component.scss']
})
export class EditDebitNoteComponent implements OnInit {

  private debitNote: DebitNote;

  constructor(private activatedRoute: ActivatedRoute) {
    this.debitNote = this.activatedRoute.snapshot.data['debitNote'];
  }

  ngOnInit() {
  }

  downloadXml() {
    this.debitNote.downloadXml();
  }

}
