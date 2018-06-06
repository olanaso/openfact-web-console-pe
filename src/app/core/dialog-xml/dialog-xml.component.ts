import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'of-dialog-xml',
  templateUrl: './dialog-xml.component.html',
  styleUrls: ['./dialog-xml.component.scss']
})
export class DialogXmlComponent implements OnInit {


  options:any = {maxLines: 1000};

  @Input()
  title: string;
  @Input()
  xml: any;

  constructor(public activeModal: NgbActiveModal) { }
  ngOnInit() {
  }


  dismiss(download: string) {
    if (this.activeModal.dismiss) {
      this.activeModal.dismiss(download);
    }
  }

}
