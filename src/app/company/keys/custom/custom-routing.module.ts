import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { CustomComponent } from './custom.component';

const routes: Routes = [
  {
    path: '',
    component: CustomComponent,
    children: [
      {
        path: '',
        redirectTo: '_active',
        pathMatch: 'full'
      },
      {
        path: '_active',
        loadChildren: './active/active.module#ActiveModule',
      },
      {
        path: '_all',
        loadChildren: './all/all.module#AllModule',
      },
      {
        path: '_providers',
        loadChildren: './providers/providers.module#ProvidersModule',
      },
      {
        path: '_providers/:provider',
        loadChildren: './provider/provider.module#ProviderModule',
      },
      {
        path: '_providers/:provider/:component',
        loadChildren: './provider/provider.module#ProviderModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomRoutingModule { }
