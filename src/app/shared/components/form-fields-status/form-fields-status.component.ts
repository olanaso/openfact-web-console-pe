import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'of-form-fields-status',
  templateUrl: './form-fields-status.component.html',
  styleUrls: []
})
export class FormFieldsStatusComponent implements OnInit {

  @Input()
  form: FormGroup;

  hasRequiredFields: boolean;

  constructor() { }

  ngOnInit() {
    this.refreshState();
  }

  refreshState() {
    this.hasRequiredFields = this.checkIfHasRequiredFields(this.form);
  }

  checkIfHasRequiredFields(formGroup: FormGroup): boolean {
    let result = false;
    for (const key in this.form.controls) {
      if (!key) { continue; }

      const abstractControl: AbstractControl = this.form.controls[key];
      if (abstractControl instanceof FormGroup) {
        if (this.checkIfHasRequiredFields(abstractControl)) {
          result = true;
          break;
        }
      } else {
        if (abstractControl.errors && abstractControl.errors['required'] !== 'undefined') {
          result = true;
          break;
        }
      }
    }
    return result;
  }

}
