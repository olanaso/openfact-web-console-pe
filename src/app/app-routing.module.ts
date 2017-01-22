import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
    {
        path: "",
        redirectTo: "/admin/organizations",
        pathMatch: "full"
    },
    {
        path: "about",
        component: AboutComponent,
        outlet: "secondary"
    },
    {
        path: "admin",
        loadChildren: "app/admin/admin.module#AdminModule"
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
