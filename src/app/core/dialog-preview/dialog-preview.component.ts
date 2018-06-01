import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'of-dialog-preview',
  templateUrl: './dialog-preview.component.html',
  styleUrls: ['./dialog-preview.component.scss']
})
export class DialogPreviewComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  pdfSrc: any;

  constructor(public activeModal: NgbActiveModal) { }
  ngOnInit() {
  }

  dismiss(download: string) {
    if (this.activeModal.dismiss) {
      this.activeModal.dismiss(download);
    }
  }
}
