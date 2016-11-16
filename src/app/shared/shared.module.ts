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

// Components
import { ButtonDeleteComponent } from './components/button-delete/button-delete.component';
import { ButtonSaveComponent } from './components/button-save/button-save.component';
import { ButtonSwitchComponent } from './components/button-switch/button-switch.component';
import { ButtonUploadFileComponent } from './components/button-upload-file/button-upload-file.component';
import { RelativeTimestampComponent } from './components/relative-timestamp/relative-timestamp.component';

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
    FileUploadModule
  ],
  declarations: [
    // Components
    ButtonDeleteComponent,
    ButtonSaveComponent,
    ButtonSwitchComponent,
    ButtonUploadFileComponent,
    RelativeTimestampComponent,

    // Directives

    // Pipes
    CapitalizePipe,
    FilterCollectionPipe,
    KeysPipe,
    YesNoPipe
  ],
  exports: [
    // Components
    ButtonDeleteComponent,
    ButtonSaveComponent,
    ButtonSwitchComponent,
    ButtonUploadFileComponent,
    RelativeTimestampComponent,

    // Directives

    // Pipes
    FilterCollectionPipe,
    KeysPipe,
    YesNoPipe
  ],
  providers: []
})
export class SharedModule { }
