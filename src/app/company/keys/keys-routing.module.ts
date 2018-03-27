import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { KeysComponent } from './keys.component';

const routes: Routes = [
    {
        path: '',
        component: KeysComponent,
        children: [
          {
            path: '',
            component: ActiveComponent
          },
          {
            path: '_all',
            loadChildren: './all/all.module#AllModule',
          },
          {
            path: '_providers',
            loadChildren: './providers/providers.module#ProvidersModule',
          }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KeysRoutingModule { }
