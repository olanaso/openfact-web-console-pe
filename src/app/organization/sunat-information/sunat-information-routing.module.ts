import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SunatInformationComponent } from './sunat-information.component';

const routes: Routes = [
    {
        path: '',
        component: SunatInformationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SunatInformationRoutingModule { }
