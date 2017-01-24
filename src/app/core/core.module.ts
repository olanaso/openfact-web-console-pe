import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { KeycloakService } from './keycloak.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers: [
    KeycloakService
  ]
})
export class CoreModule { }
