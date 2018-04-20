import { ControlValueAccessor, Validator, AbstractControl, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { TipoIGV } from './../tipos-igv';
import { TotalAdditionalInformation } from './../total-additional-information';
import { Component, OnInit, Input, Output, EventEmitter, DoCheck, OnChanges, forwardRef } from '@angular/core';
import { DocumentLine } from './../document-line';

import { cloneDeep } from 'lodash';

const callback = () => { };

@Component({
  selector: 'of-document-total-additional-information',
  templateUrl: './document-total-additional-information.component.html',
  styleUrls: ['./document-total-additional-information.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DocumentTotalAdditionalInformationComponent),
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DocumentTotalAdditionalInformationComponent),
      multi: true,
    }
  ]
})
export class DocumentTotalAdditionalInformationComponent implements OnInit, ControlValueAccessor, Validator {

  isDisabled: boolean;
  formulario = {} as TotalAdditionalInformation;

  private _operacionGratuita: boolean;
  private _detalle: DocumentLine[] = [];

  // the method set in registerOnChange to emit changes back to the form
  private _onTouchedCallback: () => void = callback;
  private _onChangeCallback: (_: any) => void = callback;
  private _onValidatorChangeCallback: (_: any) => void = callback;

  get operacionGratuita(): boolean {
    return this._operacionGratuita;
  }

  @Input()
  set operacionGratuita(value: boolean) {
    if (value !== undefined && value !== null) {
      this._operacionGratuita = value;
      if (this._operacionGratuita) {
        this.formulario.porcentajeDescuento = null;
        this.formulario.otrosCargos = null;
      }
      this.recalcular();
    }
  }

  get detalle(): DocumentLine[] {
    return this._detalle;
  }

  @Input()
  set detalle(value: DocumentLine[]) {
    if (value !== undefined && value !== null) {
      this._detalle = value;
      this.recalcular();
    }
  }

  constructor() { }

  ngOnInit() { }

  recalcular() {
    let totalGratuita = 0;
    let totalGravado = 0;
    let totalExonerado = 0;
    let totalInafecto = 0;
    let totalIGV = 0;

    let totalOtrosCargos = this.formulario.otrosCargos || 0;

    this.detalle.forEach((line) => {
      const tipoIGV: TipoIGV = line.tipoIGV;

      if (!tipoIGV) {
        return;
      }

      if (this._operacionGratuita) {
        if (tipoIGV.afectaIGV) {
          totalGratuita += line.total;
        } else {
          totalGratuita += line.subtotal;
        }
      } else {
        if (tipoIGV.grupo.toUpperCase() === 'GRAVADO') {
          totalGravado += line.subtotal;
        } else if (tipoIGV.grupo.toUpperCase() === 'EXONERADO') {
          totalExonerado += line.subtotal;
        } else if (tipoIGV.grupo.toUpperCase() === 'INAFECTO') {
          totalInafecto += line.subtotal;
        } else {
          throw new Error('Grupo de igv invalido:' + tipoIGV.grupo);
        }

        if (tipoIGV.afectaIGV) {
          totalIGV += line.totalIGV;
        }
      }
    });

    const descuentoPorcentual = (this.formulario.porcentajeDescuento || 0) / 100;
    const totalGravadaConDescuento = totalGravado - (totalGravado * descuentoPorcentual);
    const totalExoneradaConDescuento = totalExonerado - (totalExonerado * descuentoPorcentual);
    const totalInafectaConDescuento = totalInafecto - (totalInafecto * descuentoPorcentual);
    const totalIgvConDescuento = totalIGV - (totalIGV * descuentoPorcentual);

    // Descuento global
    const descuentoGlobal =
      (totalGravado - totalGravadaConDescuento) +
      (totalExonerado - totalExoneradaConDescuento) +
      (totalInafecto - totalInafectaConDescuento);

    // Calculo del total
    const total = totalGravadaConDescuento +
      totalExoneradaConDescuento +
      totalInafectaConDescuento +
      totalIgvConDescuento +
      totalOtrosCargos;


    // Resultado
    this.formulario.totalGratuito = totalGratuita;
    this.formulario.totalGravado = totalGravadaConDescuento;
    this.formulario.totalExonerado = totalExoneradaConDescuento;
    this.formulario.totalInafecto = totalInafectaConDescuento;
    this.formulario.totalIGV = totalIgvConDescuento;
    this.formulario.totalDescuento = descuentoGlobal;
    this.formulario.otrosCargos = totalOtrosCargos;
    this.formulario.total = total;

    const result = cloneDeep(this.formulario);
    this._onChangeCallback(result);
  }

  // Form control
  writeValue(value: TotalAdditionalInformation): void {
    if (value !== undefined && value !== null) {
      this.formulario = value;
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
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this._onValidatorChangeCallback = fn;
  }

}
