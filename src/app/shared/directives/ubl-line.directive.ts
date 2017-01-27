import { Directive, Input, HostListener, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

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

  @Input("ofUblLine")
  private tax: number = 1;

  currentState: UblLine;
  notificator: EventEmitter<UblLine> = new EventEmitter<UblLine>();

  private _quantity: any;
  private _unitPrice: any;
  private _subtotal: any;
  private _total: any;

  constructor() { }

  refreshLeft() {
    if (this._quantity && this._unitPrice && this.isFireAllowed()) {
      this._subtotal = this._quantity * this._unitPrice;
      this._total = this._subtotal * (this.tax + 1);

      this.currentState = this.getResult();
      this.notificator.emit(this.currentState);
    }
  }

  refreshSubRight() {
    if (this._unitPrice && this._subtotal && this.isFireAllowed()) {
      this._quantity = this._subtotal / this._unitPrice;
      this._total = this._subtotal * (this.tax + 1);

      this.currentState = this.getResult();
      this.notificator.emit(this.currentState);
    }
  }

  refreshRight() {
    if (this._unitPrice && this._total && this.isFireAllowed()) {
      this._quantity = this._total / (this._unitPrice * (this.tax + 1));
      this._subtotal = this._quantity * this._unitPrice;

      this.currentState = this.getResult();
      this.notificator.emit(this.currentState);
    }
  }

  getResult(): UblLine {
    let result: UblLine = {
      quantity: this._quantity,
      unitPrice: this._unitPrice,
      subtotal: this._subtotal,
      total: this._total
    };
    return result;
  }

  isFireAllowed(): boolean {
    if (this.currentState &&
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