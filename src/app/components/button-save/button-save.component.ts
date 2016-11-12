import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button-save',
  templateUrl: './button-save.component.html',
  styleUrls: ['./button-save.component.scss']
})
export class ButtonSaveComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() working: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClickChild(event) {
    if (!this.form.valid) {
      event.preventDefault();
    }
  }

}
