import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponentsModule } from '../../../admin/components/components.module';
import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AdminComponentsModule,

    SharedModule,
    CoreModule
  ],
  declarations: [
    DashboardComponent
  ],
  entryComponents: [],
  exports: [
    DashboardComponent
  ],
  providers: []
})
export class DashboardModule {
}
