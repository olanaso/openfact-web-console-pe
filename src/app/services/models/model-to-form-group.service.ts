import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { OrganizationModel } from './organization-model';

@Injectable()
export class ModelToFormGroupService {

  constructor(private formBuilder: FormBuilder) { }

  toFormGroup(organization: OrganizationModel) {
    let group = this.formBuilder.group({
      name: ['', [Validators.required]],
      supplierName: ['', []],
      registrationName: ['', []],
      additionalAccountId: ['', []],
      assignedIdentificationId: ['', []],
      enabled: ['', []]
    });
    return group;
  }

}
