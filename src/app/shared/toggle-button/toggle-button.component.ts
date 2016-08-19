import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'toggle-button',
  templateUrl: 'toggle-button.component.html',
  styleUrls: ['toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit, ControlValueAccessor {

  @Input() value: boolean = true;
  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() disable: boolean = false;

  onClick() {
    this.value = !this.value;
    this.onChange.emit(this.value);
  }

  constructor() {
  }

  ngOnInit() {

  }

  writeValue(obj: any): void { }
  /**
   * Set the function to be called when the control receives a change event.
   */
  registerOnChange(fn: any): void { }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: any): void { }

}