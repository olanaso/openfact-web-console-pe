import {Component, OnInit, Input, Output, EventEmitter, Renderer, ElementRef} from '@angular/core';
import { DefaultValueAccessor } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'button-switch',
  templateUrl: 'button-switch.component.html',
  styleUrls: ['button-switch.component.css']
})
export class ButtonSwitchComponent implements OnInit {

  @Input() value: boolean;
  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() disable: boolean = false;

  constructor(/*renderer: Renderer, elementRef: ElementRef*/) {
    //super(renderer, elementRef); 
  }


  ngOnInit() {

  }

  onClick() {
    this.value = !this.value;
    this.onChange.emit(this.value);
  }

  /*writeValue(value: any): void {

  }

  registerOnChange(fn: (_: any) => void): void {

  }

  registerOnTouched(fn: () => void): void {

  }*/

}