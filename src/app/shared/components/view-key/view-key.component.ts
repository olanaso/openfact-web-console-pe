import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'of-view-key',
  templateUrl: './view-key.component.html',
  styleUrls: ['./view-key.component.scss']
})
export class ViewKeyComponent implements OnInit {

  @Input()
  key: any;

  @Input()
  label: string;

  @Input()
  isSpan: boolean;

  @Input()
  isButton: boolean;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
    });
  }

}
