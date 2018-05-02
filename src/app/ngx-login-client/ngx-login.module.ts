import { UserService } from './user/user.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxBaseModule } from './../ngx-base/ngx-base.module';

import { AuthenticationService } from './auth/authentication.service';

@NgModule({
  imports: [
    HttpClientModule,
    NgxBaseModule
  ],
  declarations: [

  ],
  exports: [

  ]
})
export class NxgLoginModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NxgLoginModule,
      providers: [
        AuthenticationService,
        UserService
      ]
    };
  }

}
