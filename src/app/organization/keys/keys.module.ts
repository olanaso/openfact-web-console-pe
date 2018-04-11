import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeysComponent } from './keys.component';
import { KeysRoutingModule } from './keys-routing.module';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';

@NgModule({
  imports: [
    CommonModule,
    KeysRoutingModule,
    JWBootstrapSwitchModule
  ],
  declarations: [KeysComponent]
})
export class KeysModule { }
