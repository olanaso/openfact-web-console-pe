import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Directive({
  selector: '[ofFormRequiredLabel]'
})
export class FormRequiredLabelDirective implements OnInit {

  @Input()
  ofFormRequiredLabel: FormControl;

  constructor() { }

  @HostBinding("class.required-pf")
  required: boolean;

  ngOnInit() {
    if (this.ofFormRequiredLabel.errors && this.ofFormRequiredLabel.errors["required"] !== "undefined") {
      this.required = true;
    }
  }

}
