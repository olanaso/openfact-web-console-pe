import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { AboutComponent } from './common/about/about.component';
import { ServerInfoComponent } from './common/server-info/server-info.component';
import { Error404Component } from './common/error404/error404.component';
import { Error403Component } from './common/error403/error403.component';
import { Error500Component } from './common/error500/error500.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'home', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'server-info', component: ServerInfoComponent },
  { path: 'admin', loadChildren: 'app/admin/ui/ui.module#AdminUIModule' },
  { path: 'organizations/:organization', loadChildren: 'app/organization/ui/ui.module#OrganizationUIModule' },
  { path: 'not-found', component: Error404Component },
  { path: 'forbidden', component: Error403Component },
  { path: 'server-error', component: Error500Component },
  { path: 'about', component: AboutComponent, outlet: 'popup' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
