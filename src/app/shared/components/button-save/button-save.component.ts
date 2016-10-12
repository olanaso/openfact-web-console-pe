import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'button-save',
  templateUrl: './button-save.component.html',
  styleUrls: ['./button-save.component.scss']
})
export class ButtonSaveComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() working: boolean = false;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onClickChild(event) {
    if (!this.form.valid) {
      event.preventDefault();
      this.onClick.emit(false);
    } else {
      this.onClick.emit(true);
    }
  }

}
