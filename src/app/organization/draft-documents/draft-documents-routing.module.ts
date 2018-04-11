import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DraftDocumentsComponent } from './draft-documents.component';

const routes: Routes = [
    {
        path: '',
        component: DraftDocumentsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DraftDocumentsRoutingModule { }
