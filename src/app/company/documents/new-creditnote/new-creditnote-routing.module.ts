import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewCreditnoteComponent } from './new-creditnote.component';

const routes: Routes = [
  {
    path: '',
    component: NewCreditnoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewCreditnoteRoutingModule { }
