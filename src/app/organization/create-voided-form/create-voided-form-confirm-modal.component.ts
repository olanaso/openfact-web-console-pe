/**
 * Created by lxpary on 03/01/17.
 */
import {Component, OnInit, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-create-voided-form-confirm-modal',
  templateUrl: './create-voided-form-confirm-modal.component.html',
  styleUrls: ['./create-voided-form-confirm-modal.component.scss']
})
export class CreateVoidedFormConfirmModalComponent implements OnInit {

  description;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  update() {
    let status: boolean = false;
    if (this.description != null) {
      status = true;
    }
    this.activeModal.close({description: this.description, status: status});
  }
}
