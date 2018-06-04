import { Component, Input, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'of-button-upload',
  templateUrl: './button-upload.component.html',
  styleUrls: []
})
export class ButtonUploadComponent implements OnInit {

  @Input()
  ofForm: FormGroup;

  @Input()
  working = false;

  constructor() { }

  ngOnInit() {
  }

  onClickChild(event) {
    if (!this.ofForm.valid) {
      event.preventDefault();
    }
  }
}
