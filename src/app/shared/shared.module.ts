import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonCancelComponent } from './components/button-cancel/button-cancel.component';
import { ButtonDeleteComponent } from './components/button-delete/button-delete.component';
import { ButtonResetComponent } from './components/button-reset/button-reset.component';
import { ButtonSaveComponent } from './components/button-save/button-save.component';
import { ButtonSwitchComponent } from './components/button-switch/button-switch.component';
import { CommonModule } from '@angular/common';
import { FormFieldValidationMessagesComponent } from './components/form-field-validation-messages/form-field-validation-messages.component';
import { FormFieldValidationStateDirective } from './directives/form-field-validation-state.directive';
import { FormFieldsStatusComponent } from './components/form-fields-status/form-fields-status.component';
import { FormRequiredLabelDirective } from './directives/form-required-label.directive';
import { HttpModule } from '@angular/http';
import { KeysPipe } from './pipes/keys.pipe';
import { MomentModule } from 'angular2-moment';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReadFileComponent } from './components/read-file/read-file.component';
import { RouterModule } from '@angular/router';
import { ToArrayPipe } from './pipes/to-array.pipe';
import { ToDatePipe } from './pipes/to-date.pipe';
import { TranslateModule } from 'ng2-translate';
import { ViewObjectComponent } from './components/view-object/view-object.component';
import { YesNoPipe } from './pipes/yes-no.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule,
    TranslateModule,
    MomentModule,
  ],
  declarations: [
    FormFieldsStatusComponent,
    FormRequiredLabelDirective,
    FormFieldValidationMessagesComponent,
    FormFieldValidationStateDirective,

    ButtonDeleteComponent,
    ButtonSaveComponent,
    ButtonCancelComponent,
    ButtonResetComponent,
    ButtonSwitchComponent,
    ReadFileComponent,
    ViewObjectComponent,
    ToArrayPipe,
    KeysPipe,
    ToDatePipe,
    YesNoPipe,
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule,
    TranslateModule,
    MomentModule,

    FormFieldsStatusComponent,
    FormRequiredLabelDirective,
    FormFieldValidationMessagesComponent,
    FormFieldValidationStateDirective,

    ButtonDeleteComponent,
    ButtonSaveComponent,
    ButtonCancelComponent,
    ButtonResetComponent,
    ButtonSwitchComponent,

    ReadFileComponent,
    ViewObjectComponent,

    ToArrayPipe,
    KeysPipe,
    ToDatePipe,
    YesNoPipe,
  ]
})
export class SharedModule { }
