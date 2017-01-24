import { Directive, HostBinding, Input, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Directive({
  selector: '[ofFormFieldValidationState]'
})
export class FormFieldValidationStateDirective implements OnInit {

  @Input()
  ofFormFieldValidationState: FormControl;

  constructor() { }

  ngOnInit() {
    this.ofFormFieldValidationState.valueChanges.subscribe(controlValue => {
      if (this.ofFormFieldValidationState.valid) {
        this.hasError = false;
      } else {
        this.hasError = true;
      }
    });
  }

  @HostBinding("class.has-error")
  hasError: boolean;

}
