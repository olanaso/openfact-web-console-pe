import { ProvidersRoutingModule } from './providers-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersComponent } from './providers.component';

@NgModule({
  imports: [
    CommonModule,
    ProvidersRoutingModule
  ],
  declarations: [ProvidersComponent]
})
export class ProvidersModule { }
