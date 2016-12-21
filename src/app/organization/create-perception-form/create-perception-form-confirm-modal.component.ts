/**
 * Created by lxpary on 19/12/16.
 */
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-create-perception-form-confirm-modal',
  templateUrl: './create-perception-form-confirm-modal.component.html',
  styleUrls: ['./create-perception-form-confirm-modal.component.scss']
})
export class CreatePerceptionFormConfirmModalComponent implements OnInit {

  @Input()
  totalDocumentoSunat: number;

  @Input()
  totalPago: number;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
