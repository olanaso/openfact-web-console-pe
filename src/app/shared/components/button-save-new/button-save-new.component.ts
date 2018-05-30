import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormGroup } from '@angular/forms';


@Component({
  selector: 'of-button-save-new',
  templateUrl: './button-save-new.component.html',
  styleUrls: []
})
export class ButtonSaveNewComponent implements OnInit {

  @Input()
  ofForm: FormGroup;

  @Input()
  working = false;

  @Output()
  pressed: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClickChild(event) {
    if (!this.ofForm.valid) {
      event.preventDefault();
    } else {
      this.pressed.next({ save: false, new: true });
    }
  }
}
