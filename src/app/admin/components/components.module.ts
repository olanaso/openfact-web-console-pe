import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    SharedModule,
    CoreModule
  ],
  declarations: [
    AdminHeaderComponent
  ],
  exports: [
    AdminHeaderComponent
  ],
})
export class AdminComponentsModule {
}
