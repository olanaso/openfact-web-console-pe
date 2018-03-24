import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: '../companies/companies.module#CompaniesModule',
      },
      {
        path: '_companies',
        loadChildren: '../companies/companies.module#CompaniesModule',
      },
      {
        path: '_newcompany',
        loadChildren: '../new-company/new-company.module#NewCompanyModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
