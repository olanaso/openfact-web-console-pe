import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeysComponent } from './keys.component';
import { KeysRoutingModule } from './keys-routing.module';
import { ActiveModule } from './active/active.module';

@NgModule({
  imports: [
    CommonModule,
    KeysRoutingModule,
    ActiveModule
  ],
  declarations: [KeysComponent]
})
export class KeysModule { }
