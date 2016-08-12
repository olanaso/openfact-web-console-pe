import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, AbstractControl} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'button-reset',
  templateUrl: 'button-reset.component.html',
  styleUrls: ['button-reset.component.css']
})
export class ButtonResetComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() working: boolean = false;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onChildClick(event) {
    this.form.reset();
     this.onClick.emit(true)
  }

}
