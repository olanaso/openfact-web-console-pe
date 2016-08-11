import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FilterCollectionPipe} from './filter-collection.pipe';
import {YesNoPipe} from './yes-no.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FilterCollectionPipe,
        YesNoPipe
    ],
    exports: [
        FilterCollectionPipe,
        YesNoPipe
    ],
    providers: []
})

export class PipeModule {

}