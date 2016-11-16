import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

// App Config
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Third modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Openfact modules
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AdminModule,
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
