import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FormFieldValidationMessagesComponent } from './components/form-field-validation-messages/form-field-validation-messages.component';
import { FormFieldValidationStateDirective } from './directives/form-field-validation-state.directive';
import { FormFieldsStatusComponent } from './components/form-fields-status/form-fields-status.component';
import { FormRequiredLabelDirective } from './directives/form-required-label.directive';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule,
    TranslateModule
  ],
  declarations: [
    FormFieldsStatusComponent,
    FormRequiredLabelDirective,
    FormFieldValidationMessagesComponent,
    FormFieldValidationStateDirective
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule,
    TranslateModule,

    FormFieldsStatusComponent,
    FormRequiredLabelDirective,
    FormFieldValidationMessagesComponent,
    FormFieldValidationStateDirective
  ]
})
export class SharedModule { }
