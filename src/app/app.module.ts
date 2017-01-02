// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

// App Config
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Third modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

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
    HttpModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    }),

    // Third modules

    // Openfact modules
    SharedModule,
    CoreModule,
    ErrorModule,
    AdminModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
