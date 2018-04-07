import { Component, OnInit, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { SUNATGenericType } from '../../../../ngx-openfact';

import { TipoIGV } from '../tipos-igv';
import { DocumentLine } from '../document-line';

import { cloneDeep } from 'lodash';

const callback = () => { };

@Component({
  selector: 'of-document-table-lines',
  templateUrl: './document-table-lines.component.html',
  styleUrls: ['./document-table-lines.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DocumentTableLinesComponent),
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DocumentTableLinesComponent),
      multi: true,
    }
  ]
})
export class DocumentTableLinesComponent implements OnInit, ControlValueAccessor, Validator {

  @Input()
  valorIGV: number;

  @Input()
  tiposIGV: TipoIGV[] = [];

  @Input()
  esDetallado: boolean;

  isDisabled: boolean;
  _value: DocumentLine[] = [];

  private tieneDetallesInvalidos: boolean;

  // the method set in registerOnChange to emit changes back to the form
  private _onTouchedCallback: () => void = callback;
  private _onChangeCallback: (_: any) => void = callback;
  private _onValidatorChangeCallback: (_: any) => void = callback;

  constructor() { }

  ngOnInit() { }

  // Value

  get value(): DocumentLine[] {
    return this._value;
  }

  set value(value: DocumentLine[]) {
    this._value = value;
    this._onChangeCallback(this._value);
  }

  // Operations

  addRow() {
    this._value.push({
      unidadMedida: 'NIO',
      cantidad: 1
    } as DocumentLine);
    this.refreshComponent();
  }

  removeRow(index: number) {
    this._value.splice(index, 1);
    this.refreshComponent();
  }

  changedRow(index: number, row: DocumentLine) {
    this._value[index] = row;
    this.refreshComponent();
  }

  refreshComponent() {
    let invalido = false;
    for (let i = 0; i < this._value.length; i++) {
      const item: DocumentLine = this._value[i];
      if (
        !item.unidadMedida ||
        !item.descripcion ||
        !item.cantidad ||
        !item.tipoIGV ||
        !item.precioUnitario ||
        !item.valorUnitario ||
        !item.subtotal ||
        !item.total ||
        !item.totalIGV
      ) {
        invalido = true;
      }
    }

    this.tieneDetallesInvalidos = invalido;

    // tieneDetallesInvalidos
    const result = cloneDeep(this._value as DocumentLine[]);
    this._onChangeCallback(result);
  }

  // Form Control

  writeValue(value: DocumentLine[]): void {
    if (value !== undefined && value !== null) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  // Validation

  validate(c: AbstractControl): { [key: string]: any; } {
    return (!this.tieneDetallesInvalidos) ? null : {
      linesError: {
        valid: false
      }
    };
  }

  registerOnValidatorChange?(fn: () => void): void {
    this._onValidatorChangeCallback = fn;
  }

}
