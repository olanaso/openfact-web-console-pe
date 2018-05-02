import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewDebitnoteComponent } from './new-debitnote.component';

const routes: Routes = [
  {
    path: '',
    component: NewDebitnoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewDebitnoteRoutingModule { }
