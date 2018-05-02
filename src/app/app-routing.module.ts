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

  // Organization
  {
    path: '_organization/:organization',
    loadChildren: './organization/organization.module#OrganizationModule',
    resolve: {
      context: ContextResolver
    },
    data: {
      title: 'Organization'
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
