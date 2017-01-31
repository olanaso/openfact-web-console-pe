import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit } from '@angular/core';

import { NgControl } from '@angular/forms';

// al sacar subtotal y total se debe de redondear a dos digitos
// Sin embargo para el calculo de total gravado, exonerado e inafecto se
// debe debe de realizar la suma de subtotales y totales tomando en cuenta todos los decimales

export interface UblLine {
  quantity: number,
  unitPrice: number,
  subtotal: number,
  total: number
}

@Directive({
  selector: '[ofUblLine]'
})
export class UblLineDirective {

  // Se debe de ingresar el factor de incremento ej. 0.18
  private _tax: number = 1;

  @Input('ofUblLine')
  set ofUblLine(ofUblLine: number) {
    this._tax = +(ofUblLine + 1).toFixed(2);
    this.currentState = null;
    this.refreshLeft();
  }

  currentState: UblLine;
  notificator: EventEmitter<UblLine> = new EventEmitter<UblLine>();

  private _quantity: number;
  private _unitPrice: number;
  private _subtotal: number;
  private _total: number;

  constructor() { }

  refreshLeft() {
    if (this._quantity && this._unitPrice && this.isFireAllowed()) {
      this._subtotal = this._quantity * this._unitPrice;
      this._total = this._subtotal * this._tax;

      this.currentState = this.getResult();
      this.notificator.emit(this.currentState);
    }
  }

  refreshSubRight() {
    if (this._unitPrice && this._subtotal && this.isFireAllowed()) {
      this._quantity = this._subtotal / this._unitPrice;
      this._total = this._subtotal * this._tax;

      this.currentState = this.getResult();
      this.notificator.emit(this.currentState);
    }
  }

  refreshRight() {
    if (this._unitPrice && this._total && this.isFireAllowed()) {
      this._quantity = this._total / (this._unitPrice * this._tax);
      this._subtotal = this._quantity * this._unitPrice;

      this.currentState = this.getResult();
      this.notificator.emit(this.currentState);
    }
  }

  // redondeos para evitar errores de multiplicacion con float y decimales indeterminados
  getResult(): UblLine {
    this._quantity = +this._quantity.toFixed(3);
    this._unitPrice = +this._quantity.toFixed(2);
    this._subtotal = +this._quantity.toFixed(2);
    this._total = +this._quantity.toFixed(2);

    let result: UblLine = {
      quantity: this._quantity,
      unitPrice: this._unitPrice,
      subtotal: this._subtotal,
      total: this._total
    };
    return result;
  }

  isFireAllowed(): boolean {
    if (
      this.currentState &&
      this._quantity == this.currentState.quantity &&
      this._unitPrice == this.currentState.unitPrice &&
      this._subtotal == this.currentState.subtotal &&
      this._total == this.currentState.total) {
      return false;
    }
    return true;
  }

  set quantity(quantity: number) {
    this._quantity = quantity;
    this.refreshLeft();
  }

  set unitPrice(unitPrice: number) {
    this._unitPrice = unitPrice;
    this.refreshLeft();
  }

  set subtotal(subtotal: number) {
    this._subtotal = subtotal;
    this.refreshSubRight();
  }

  set total(total: number) {
    this._total = total;
    this.refreshRight();
  }

}

@Directive({
  selector: '[ofUblLineQuantity]'
})
export class UblLineQuantityDirective implements OnInit {

  constructor(public line: UblLineDirective, private control: NgControl) { }

  ngOnInit() {
    this.control.valueChanges.subscribe(controlValue => {
      this.line.quantity = controlValue;
    });

    this.line.notificator.subscribe((result: UblLine) => {
      this.control.control.setValue(result.quantity);
    });
  }

}

@Directive({
  selector: '[ofUblLineUnitPrice]'
})
export class UblLineUnitPriceDirective implements OnInit {

  constructor(public line: UblLineDirective, private control: NgControl) { }

  ngOnInit() {
    this.control.valueChanges.subscribe(controlValue => {
      this.line.unitPrice = controlValue;
    });

    this.line.notificator.subscribe((result: UblLine) => {
      this.control.control.setValue(result.unitPrice);
    });
  }

}

@Directive({
  selector: '[ofUblLineSubtotal]'
})
export class UblLineSubtotalDirective implements OnInit {

  constructor(public line: UblLineDirective, private control: NgControl) { }

  ngOnInit() {
    this.control.valueChanges.subscribe(controlValue => {
      this.line.subtotal = controlValue;
    });

    this.line.notificator.subscribe((result: UblLine) => {
      this.control.control.setValue(result.subtotal);
    });
  }

}

@Directive({
  selector: '[ofUblLineTotal]'
})
export class UblLineTotalDirective implements OnInit {

  constructor(public line: UblLineDirective, private control: NgControl) { }

  ngOnInit() {
    this.control.valueChanges.subscribe(controlValue => {
      this.line.total = controlValue;
    });

    this.line.notificator.subscribe((result: UblLine) => {
      this.control.control.setValue(result.total);
    });
  }

}