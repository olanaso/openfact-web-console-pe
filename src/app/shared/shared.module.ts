import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  UblLineDirective,
  UblLineQuantityDirective,
  UblLineSubtotalDirective,
  UblLineTaxAmountDirective,
  UblLineTotalDirective,
  UblLineUnitPriceDirective,
  UblLineUnitValueDirective,
} from './directives/ubl-line.directive';

import { ButtonCancelComponent } from './components/button-cancel/button-cancel.component';
import { ButtonDeleteComponent } from './components/button-delete/button-delete.component';
import { ButtonResetComponent } from './components/button-reset/button-reset.component';
import { ButtonSaveComponent } from './components/button-save/button-save.component';
import { ButtonSwitchComponent } from './components/button-switch/button-switch.component';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { FirstElementPipe } from './pipes/first-element.pipe';
import { FormFieldValidationMessagesComponent } from './components/form-field-validation-messages/form-field-validation-messages.component';
import { FormFieldValidationStateDirective } from './directives/form-field-validation-state.directive';
import { FormFieldsStatusComponent } from './components/form-fields-status/form-fields-status.component';
import { FormRequiredLabelDirective } from './directives/form-required-label.directive';
import { HttpModule } from '@angular/http';
import { KeysPipe } from './pipes/keys.pipe';
import { LimitedStringComponent } from './components/limited-string/limited-string.component';
import { MomentModule } from 'angular2-moment';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NumberMaskDirective } from './directives/number-mask.directive';
import { OnOffSwitchStringComponent } from './components/on-off-switch-string/on-off-switch-string.component';
import { ReadFileComponent } from './components/read-file/read-file.component';
import { RouterModule } from '@angular/router';
import { SelectModule } from 'ng2-select';
import { TextMaskModule } from 'angular2-text-mask';
import { ToArrayPipe } from './pipes/to-array.pipe';
import { ToDatePipe } from './pipes/to-date.pipe';
import { ToNumberPipe } from './pipes/to-number.pipe';
import { TranslateModule } from 'ng2-translate';
import { UblLineGroupByDirective } from './directives/ubl-line-group-by.directive';
import { UblLineGroupDirective } from './directives/ubl-line-group.directive';
import { ViewKeyComponent } from './components/view-key/view-key.component';
import { ViewObjectComponent } from './components/view-object/view-object.component';
import { YesNoPipe } from './pipes/yes-no.pipe';
import { BsDropdownModule, BsDatepickerModule, ModalModule } from 'ngx-bootstrap';
import { LocalStorageModule } from 'angular-2-local-storage';
import { ToastModule } from 'ng2-toastr';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { AccessDirective } from './directives/access.directive';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule,
    BsDropdownModule,
    BsDatepickerModule,
    ModalModule,
    MomentModule,
    JWBootstrapSwitchModule,
    FileUploadModule,
    LocalStorageModule,
    ToastModule,
    TranslateModule,
    TextMaskModule,
    SelectModule
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
    ViewKeyComponent,
    OnOffSwitchStringComponent,
    FirstElementPipe,
    ToNumberPipe,
    LimitedStringComponent,
    NumberMaskDirective,

    UblLineDirective,
    UblLineQuantityDirective,
    UblLineUnitValueDirective,
    UblLineUnitPriceDirective,
    UblLineSubtotalDirective,
    UblLineTotalDirective,
    UblLineTaxAmountDirective,

    UblLineGroupByDirective,
    UblLineGroupDirective,

    AccessDirective,
    LoadingComponent,
  ],
  exports: [
    NgbModule,
    BsDropdownModule,
    BsDatepickerModule,
    ModalModule,
    MomentModule,
    JWBootstrapSwitchModule,
    FileUploadModule,
    LocalStorageModule,
    ToastModule,
    TranslateModule,
    TextMaskModule,
    SelectModule,

    FormFieldsStatusComponent,
    FormRequiredLabelDirective,
    FormFieldValidationMessagesComponent,
    FormFieldValidationStateDirective,

    ButtonDeleteComponent,
    ButtonSaveComponent,
    ButtonCancelComponent,
    ButtonResetComponent,
    ButtonSwitchComponent,
    OnOffSwitchStringComponent,

    ReadFileComponent,
    ViewObjectComponent,
    ViewKeyComponent,
    LimitedStringComponent,

    ToArrayPipe,
    KeysPipe,
    ToDatePipe,
    YesNoPipe,
    FirstElementPipe,
    ToNumberPipe,

    NumberMaskDirective,

    UblLineDirective,
    UblLineQuantityDirective,
    UblLineUnitValueDirective,
    UblLineUnitPriceDirective,
    UblLineSubtotalDirective,
    UblLineTotalDirective,
    UblLineTaxAmountDirective,

    UblLineGroupByDirective,
    UblLineGroupDirective,

    AccessDirective,
    LoadingComponent,
  ]
})
export class SharedModule {
}
