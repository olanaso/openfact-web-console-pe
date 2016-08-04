import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'button-cancel',
  templateUrl: 'button-cancel.component.html',
  styleUrls: ['button-cancel.component.css']
})
export class ButtonCancelComponent implements OnInit {

  @Input() working: boolean = false;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onClickChild(event) {
    this.onClick.emit(true)
  }

}
