import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewCompanyComponent } from './new-company.component';

const routes: Routes = [
    {
        path: '',
        component: NewCompanyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewCompanyRoutingModule { }
