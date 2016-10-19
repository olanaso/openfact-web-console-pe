import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-switch',
  templateUrl: './button-switch.component.html',
  styleUrls: ['./button-switch.component.scss']
})
export class ButtonSwitchComponent implements OnInit {

  @Input() value: boolean;
  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() disable: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.value = !this.value;
    this.onChange.emit(this.value);
  }

}
