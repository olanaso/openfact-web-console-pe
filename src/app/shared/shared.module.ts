// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Third modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import { TranslateModule } from 'ng2-translate';
import { FileUploadModule } from 'ng2-file-upload';
import { SelectModule } from 'ng2-select';

// Components
import { ButtonDeleteComponent } from './components/button-delete/button-delete.component';
import { ButtonSaveComponent } from './components/button-save/button-save.component';
import { ButtonSwitchComponent } from './components/button-switch/button-switch.component';
import { RelativeTimestampComponent } from './components/relative-timestamp/relative-timestamp.component';
import { ModalTextPreviewComponent } from './components/modal-text-preview/modal-text-preview.component';
import { ViewObjectComponent } from './components/view-object/view-object.component';
import { ReadFileComponent } from './components/read-file/read-file.component';
import { ViewKeyComponent } from './components/view-key/view-key.component';
import { OnOffSwitchStringComponent } from './components/on-off-switch-string/on-off-switch-string.component';

// Directives

// Pipes
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterCollectionPipe } from './pipes/filter-collection.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { YesNoPipe } from './pipes/yes-no.pipe';

@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Third modules
    NgbModule.forRoot(),
    MomentModule,
    TranslateModule,
    FileUploadModule,
    SelectModule
  ],
  declarations: [
    // Components
    ButtonDeleteComponent,
    ButtonSaveComponent,
    ButtonSwitchComponent,
    RelativeTimestampComponent,
    ModalTextPreviewComponent,
    ViewObjectComponent,
    ViewKeyComponent,
    OnOffSwitchStringComponent,

    // Directives

    // Pipes
    CapitalizePipe,
    FilterCollectionPipe,
    KeysPipe,
    YesNoPipe,
    ReadFileComponent,
  ],
  exports: [
    // Components
    ButtonDeleteComponent,
    ButtonSaveComponent,
    ButtonSwitchComponent,
    RelativeTimestampComponent,
    ModalTextPreviewComponent,
    ViewObjectComponent,
    ReadFileComponent,
    ViewKeyComponent,
    OnOffSwitchStringComponent,

    // Directives

    // Pipes
    FilterCollectionPipe,
    KeysPipe,
    YesNoPipe
  ],
  providers: []
})
export class SharedModule { }
