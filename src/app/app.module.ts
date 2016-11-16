// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// App Config
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Third modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import { TranslateModule } from 'ng2-translate';
import { FileUploadModule } from 'ng2-file-upload';

// Openfact modules
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ErrorModule } from './error/error.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    // Third modules
    NgbModule.forRoot(),
    MomentModule,
    TranslateModule,
    FileUploadModule,

    // Openfact modules
    SharedModule,
    CoreModule,
    ErrorModule,
    AdminModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
