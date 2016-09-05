import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FilterCollectionPipe} from './filter-collection.pipe';
import {YesNoPipe} from './yes-no.pipe';
import {NumberToWordsPipe} from './number-to-words.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FilterCollectionPipe,
        YesNoPipe,
        NumberToWordsPipe
    ],
    exports: [
        FilterCollectionPipe,
        YesNoPipe,
        NumberToWordsPipe
    ],
    providers: []
})

export class PipeModule {

}