import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'of-view-xml',
  templateUrl: './view-xml.component.html',
  styleUrls: ['./view-xml.component.scss']
})
export class ViewXmlComponent implements OnInit {

  @Input()
  xml: any;

  @Input()
  label: string;

  // Only show a delete icon with no text.
  @Input() buttonOnly: boolean;

  // Set to true to disable the delete button.
  @Input() disableComponent: boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
    });
  }

}
