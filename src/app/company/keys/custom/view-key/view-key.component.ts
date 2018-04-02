import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'of-view-key',
  templateUrl: './view-key.component.html',
  styleUrls: ['./view-key.component.scss']
})
export class ViewKeyComponent implements OnInit {

  @ViewChild('modalTemplate')
  modalTemplate: TemplateRef<any>;
  modalRef: BsModalRef;

  key: string;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  open(key: string) {
    this.key = key;
    this.modalRef = this.modalService.show(this.modalTemplate);
  }

  close() {
    this.modalRef.hide();
  }

}
