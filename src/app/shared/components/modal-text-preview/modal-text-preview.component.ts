import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'of-modal-text-preview',
  templateUrl: './modal-text-preview.component.html',
  styleUrls: ['./modal-text-preview.component.scss']
})
export class ModalTextPreviewComponent implements OnInit {

  // Text to be viewed
  @Input() text: string;

  // Set to true to disable the delete button.
  @Input() disableComponent: boolean = false;

  // Optional link label. Defaults to "Delete".
  @Input() label: string;

  // Only show a delete icon with no text.
  @Input() buttonOnly: boolean;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  openModal(content) {
    if (this.disableComponent) {
      return;
    }

    // opening the modal with settings scope as parent
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
    }, (reason) => {
    });

  }

}
