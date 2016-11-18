import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'of-view-object',
  templateUrl: './view-object.component.html',
  styleUrls: ['./view-object.component.scss']
})
export class ViewObjectComponent implements OnInit {

  @Input()
  object: any;

  @Input()
  label: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
    });
  }

}
