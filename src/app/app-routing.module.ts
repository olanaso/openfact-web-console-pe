import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContextResolver } from './shared/context-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '_home',
    pathMatch: 'full'
  },

  // Home
  {
    path: '_home',
    loadChildren: './home/home.module#HomeModule',
    data: {
      title: 'Home'
    }
  },

  // Company
  {
    path: '_company/:company',
    loadChildren: './company/company.module#CompanyModule',
    resolve: {
      context: ContextResolver
    },
    data: {
      title: 'Company'
    }
  },

  // Error Pages
  {
    path: '_error',
    loadChildren: './layout/error/error.module#ErrorModule',
    data: {
      title: 'Error'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
