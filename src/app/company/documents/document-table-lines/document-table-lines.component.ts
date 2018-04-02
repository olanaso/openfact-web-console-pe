import { Component, OnInit, Input, Output } from '@angular/core';
import { SUNATGenericType } from './../../../ngx-openfact';

export interface DocumentLine {
  unidadMedida: string;
  descripcion: string;
  tipoIGV: SUNATGenericType;
  cantidad: number;
  valorUnitario: number;
  precioUnitario: number;
  subtotal: number;
  total: number;
  totalIGV: number;
}

@Component({
  selector: 'of-document-table-lines',
  templateUrl: './document-table-lines.component.html',
  styleUrls: ['./document-table-lines.component.scss']
})
export class DocumentTableLinesComponent implements OnInit {

  @Input()
  formularioDetallado: boolean;

  @Input()
  tiposDeAfectacionIGV: SUNATGenericType[] = [];

  @Input()
  IGV: number;

  @Output()
  items: DocumentLine[] = [];

  constructor() { }

  ngOnInit() {
  }

  addRow() {
    this.items.push({} as DocumentLine);
  }

  removeRow(index: number) {
    this.items.splice(index - 1);
  }

}
