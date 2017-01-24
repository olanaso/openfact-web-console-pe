import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'of-button-cancel',
  templateUrl: './button-cancel.component.html',
  styles: []
})
export class ButtonCancelComponent implements OnInit {

  @Output()
  ofClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  cancel() {
    this.ofClick.emit(true);
  }

}
