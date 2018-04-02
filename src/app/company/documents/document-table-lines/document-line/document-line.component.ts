import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SUNATGenericType } from './../../../../ngx-openfact';
import { DocumentLine } from './../document-table-lines.component';

@Component({
  selector: 'tr[of-document-line]',
  templateUrl: './document-line.component.html',
  styleUrls: ['./document-line.component.scss']
})
export class DocumentLineComponent implements OnInit {

  @Input()
  index: number;

  @Input()
  IGV: number;

  @Input()
  formularioDetallado: boolean;

  @Input()
  tiposDeAfectacionIGV: SUNATGenericType[] = [];

  @Output()
  documentLineValue = new EventEmitter<DocumentLine>();

  @Output()
  documentLineRemoved = new EventEmitter<boolean>();

  documentLine = {
    unidadMedida: 'NIO',
    descripcion: null,
    cantidad: null,
    valorUnitario: null
  } as DocumentLine;

  constructor() { }

  ngOnInit() {
    this.documentLine.tipoIGV = this.tiposDeAfectacionIGV[0];
  }

  remove() {
    this.documentLineRemoved.emit(true);
  }

  recalcularALaDerecha() {
    const cantidad: number = this.documentLine.cantidad;
    const valorUnitario: number = this.documentLine.valorUnitario;

    const factorIGV: number = this.documentLine.tipoIGV.afectaIgv ? this.IGV + 1 : 1;

    const precioUnitario = valorUnitario * factorIGV;
    const subtotal = cantidad * valorUnitario;
    const total = subtotal * factorIGV;
    const totalIGV = subtotal * factorIGV;

    // patch
    this.documentLine.precioUnitario = precioUnitario;
    this.documentLine.subtotal = subtotal;
    this.documentLine.total = total;
    this.documentLine.totalIGV = totalIGV;

    this.documentLineValue.emit(this.documentLine);
  }

}
