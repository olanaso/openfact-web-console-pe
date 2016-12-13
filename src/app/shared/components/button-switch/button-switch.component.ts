import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'of-button-switch',
  templateUrl: './button-switch.component.html',
  styleUrls: ['./button-switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonSwitchComponent),
      multi: true
    }
  ]
})
export class ButtonSwitchComponent implements ControlValueAccessor, OnInit {

  @Input()
  onText;
  
  @Input()
  offText;

  _value: boolean = false;

  propagateChange = (_: any) => { };

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.value = !this.value;
  }

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.value = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.propagateChange(this._value);
  }

}
