import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-create-invoice-form-confirm-modal',
  templateUrl: './create-invoice-form-confirm-modal.component.html',
  styleUrls: ['./create-invoice-form-confirm-modal.component.scss']
})
export class CreateInvoiceFormConfirmModalComponent implements OnInit {

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
