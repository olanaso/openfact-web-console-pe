import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'of-create-credit-note-form-confirm-modal',
  templateUrl: './create-credit-note-form-confirm-modal.component.html',
  styleUrls: ['./create-credit-note-form-confirm-modal.component.scss']
})
export class CreateCreditNoteFormConfirmModalComponent implements OnInit {

  @Input()
  totalExonerado: number;

  @Input()
  totalInafecto: number;

  @Input()
  totalGravado: number;

  @Input()
  totalIgv: number;

  @Input()
  totalGratuito: number;

  @Input()
  descuentoGlobal: number;

  @Input()
  totalOtrosCargos: number;

  @Input()
  total: number;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
