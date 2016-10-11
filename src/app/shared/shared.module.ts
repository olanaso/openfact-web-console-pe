import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultHeaderComponent } from './components';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DefaultHeaderComponent
    ],
    exports: [
        DefaultHeaderComponent
    ]
})
export class SharedModule { }