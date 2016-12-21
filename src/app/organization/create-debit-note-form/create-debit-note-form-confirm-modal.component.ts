import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-create-debit-note-form-confirm-modal',
  templateUrl: './create-debit-note-form-confirm-modal.component.html',
  styleUrls: ['./create-debit-note-form-confirm-modal.component.scss']
})
export class CreateDebitNoteFormConfirmModalComponent implements OnInit {

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
