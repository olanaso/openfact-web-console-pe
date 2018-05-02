import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeysComponent } from './keys.component';

const routes: Routes = [
  {
    path: '',
    component: KeysComponent,
    children: [
      {
        path: '_default',
        loadChildren: './default/default.module#DefaultModule',
      },
      {
        path: '_custom',
        loadChildren: './custom/custom.module#CustomModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeysRoutingModule { }
