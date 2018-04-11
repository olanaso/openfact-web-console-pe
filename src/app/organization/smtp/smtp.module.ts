import { NgxButtonModule } from './../../ngx-button/ngx-button.module';
import { NgxFormsModule } from './../../ngx-forms/ngx-forms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SmtpRoutingModule } from './smtp-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmtpComponent } from './smtp.component';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';

@NgModule({
  imports: [
    CommonModule,
    SmtpRoutingModule,
    ReactiveFormsModule,
    NgxFormsModule,
    NgxButtonModule,
    JWBootstrapSwitchModule
  ],
  declarations: [SmtpComponent]
})
export class SmtpModule { }
