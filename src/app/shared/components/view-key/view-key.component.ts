import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'of-view-key',
  templateUrl: './view-key.component.html',
  styleUrls: ['./view-key.component.scss']
})
export class ViewKeyComponent implements OnInit {

  @ViewChild('content')
  content: any;

  @Input()
  key: any;

  @Input()
  label: string;

  @Input()
  isSpan: boolean;

  @Input()
  isButton: boolean;

  @Input()
  disableOpen: boolean;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    this.modalService.open(this.content).result.then((result) => {
    }, (reason) => {
    });
  }

  internalOpen() {
    if (!this.disableOpen) {
      this.modalService.open(this.content).result.then((result) => {
      }, (reason) => {
      });
    }
  }

}
