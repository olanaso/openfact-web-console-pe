import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'of-on-off-switch-string',
  templateUrl: './on-off-switch-string.component.html',
  styleUrls: ['./on-off-switch-string.component.scss']
})
export class OnOffSwitchStringComponent implements OnInit {

  _value: boolean = false;

  @Input()
  onText: string = 'ON';

  @Input()
  offText: string = 'OFF';

  @Input()
  ofDisable: boolean = false;

  @Output()
  onChange = new EventEmitter<boolean>();

  @Input()
  set value(value: boolean | string) {
    if (typeof value === 'string') {
      this._value = (value === 'true');
    } else {
      this._value = value;
    }
  }

  get value() {
    return this._value;
  }

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this._value = !this._value;
    this.onChange.emit(this._value);
  }

}
