import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DocumentLine } from './../document-line';
import { TipoIGV } from './../tipos-igv';

@Component({
  selector: 'tr[of-document-line]',
  templateUrl: './document-line.component.html',
  styleUrls: ['./document-line.component.scss']
})
export class DocumentLineComponent implements OnInit {

  _valor: DocumentLine = {} as DocumentLine;
  _valorIGV: number;
  _tiposIGV: TipoIGV[] = [];

  @Input()
  indice: number;

  @Input()
  esDetallado: boolean;

  @Input()
  desabilitado: boolean;

  @Output()
  cambiaValor = new EventEmitter<DocumentLine>();

  @Output()
  eliminarFila = new EventEmitter<boolean>();

  @Input()
  set valor(valor: DocumentLine) {
    this._valor = valor;
    this.recalcularYEmitirNuevoValor();
  }

  @Input()
  set valorIGV(valorIGV: number) {
    this._valorIGV = valorIGV;
    this.recalcularYEmitirNuevoValor();
  }

  @Input()
  set tiposIGV(tiposIGV: TipoIGV[]) {
    this._tiposIGV = tiposIGV;
    this.recalcularYEmitirNuevoValor();
  }

  get valor(): DocumentLine {
    return this._valor;
  }

  get valorIGV(): number {
    return this._valorIGV;
  }

  get tiposIGV(): TipoIGV[] {
    return this._tiposIGV;
  }

  constructor() { }

  ngOnInit() {

  }

  onRemoveClick() {
    this.eliminarFila.emit(true);
  }

  recalcularYEmitirNuevoValor() {
    const cantidad: number = this._valor.cantidad || 0;
    const valorUnitario: number = this._valor.valorUnitario || 0;

    const tipoIGV: TipoIGV = this.encontrarTipoIGVSegunCodigo(this._valor.tipoIGV);
    const factorIGV: number = tipoIGV && tipoIGV.afectaIGV ? this._valorIGV + 1 : 1;

    const precioUnitario = (valorUnitario * factorIGV);
    const subtotal = cantidad * valorUnitario;
    const total = subtotal * factorIGV;
    const totalIGV = subtotal * (factorIGV - 1);

    // patch

    this._valor.precioUnitario = precioUnitario;
    this._valor.subtotal = subtotal;
    this._valor.total = total;
    this._valor.totalIGV = totalIGV;

    this.emitirNuevoValor();
  }

  emitirNuevoValor() {
    this.cambiaValor.emit(this._valor);
  }

  encontrarTipoIGVSegunCodigo(codigo: string): TipoIGV {
    return this._tiposIGV.find((val) => val.codigo === codigo);
  }

}
