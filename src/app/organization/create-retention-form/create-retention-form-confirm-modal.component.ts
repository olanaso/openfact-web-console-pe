/**
 * Created by lxpary on 19/12/16.
 */
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-create-retention-form-confirm-modal',
  templateUrl: './create-retention-form-confirm-modal.component.html',
  styleUrls: ['./create-retention-form-confirm-modal.component.scss']
})
export class CreateRetentionFormConfirmModalComponent implements OnInit {

  @Input()
  totalRetencion: number;

  @Input()
  totalPago: number;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
