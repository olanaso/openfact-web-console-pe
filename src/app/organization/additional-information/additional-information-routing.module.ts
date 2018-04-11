import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdditionalInformationComponent } from './additional-information.component';

const routes: Routes = [
    {
        path: '',
        component: AdditionalInformationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdditionalInformationRoutingModule { }
