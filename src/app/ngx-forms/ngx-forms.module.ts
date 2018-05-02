import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormHelpBlockComponent } from './form-help-block/form-help-block.component';
import { FormControlErrorDirective } from './form-status/form-status.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FormControlErrorDirective,
    FormHelpBlockComponent,
  ],
  exports: [
    FormControlErrorDirective,
    FormHelpBlockComponent,
  ],
  providers: []
})

export class NgxFormsModule {

}
